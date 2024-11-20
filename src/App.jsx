import { useState, useEffect} from 'react'
import Modal from 'react-modal';
import {fetchImagesWithQuery} from './utils/unsplash-api'

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';

Modal.setAppElement('#root'); 

function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


    const onSubmit = (query) => {
      setQuery(query);
      setPage(1);
      setImages([]); 
  };

  useEffect(() => {
    if (!query) return;
    const fetchImagesByQuery = async () => {
      try {
        setLoading(true);
        const data = await fetchImagesWithQuery(query, page); 
        setImages((prevImages) =>
          page === 1 ? data : [...prevImages, ...data]
        );
        setTotalPages(data.total_pages);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    };
    fetchImagesByQuery ();
  }, [query, page]);

const loadMore = () => {
  if (page < totalPages) {
    setPage((prevPage) => prevPage + 1);
  }
};
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {(Array.isArray(images) && images.length > 0) && <ImageGallery images={images}
      setImages={setImages} onImageClick={openModal}/>}
      {loading && <Loader />}
      {error && <ErrorMessage error={error}/>}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onLoad={loadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          selectedImage={selectedImage}
          alt={selectedImage.alt_description}
          size={selectedImage.regular}
          likes={selectedImage.likes}
          author={selectedImage.username}
        />
      )}
    </>
  )
}

export default App;


