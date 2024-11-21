import { useState, useEffect } from 'react';
import { fetchImagesWithQuery } from './utils/unsplash-api';
import Modal from 'react-modal';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';

Modal.setAppElement('#root'); 

function App() {

  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

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
          page === 1 ? data.results : [...prevImages, ...data.results]
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
    setSelectedImage({
    regular: image.urls.regular, 
    alt: image.alt_description, 
    likes: image.likes, 
    name: image.user.name, 
  });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {images !== null && <ImageGallery images={images}
      setImages={setImages} onImageClick={openModal}/>}
      {loading && <Loader />}
      {error && <ErrorMessage error={error}/>}
      {images !== null && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onLoad={loadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          selectedImage={selectedImage}
        />
      )}
    </>
  )
}

export default App;


