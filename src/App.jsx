import { useState } from 'react'
import Modal from 'react-modal';
import {fetchImagesWithQuery} from './unsplash-api'

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
  const [query, setQuery] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = async (newQuery) => {
    try {
      setPage(1);
      setQuery(newQuery);
      setImages([]);
      setError(null);
      setLoading(true);

      const data = await fetchImagesWithQuery(newQuery, 1);
      setImages(data)
    } catch (error) {
      setError(error.message);
      <ErrorMessage error={error} />
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const data = await fetchImagesWithQuery(query, nextPage); 
      setImages((prevImages) => [...prevImages, ...data]); 
      setPage(nextPage); 
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
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
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images}
      setImages={setImages} onImageClick={openModal}/>}
      {loading && <Loader />}
      {error && <ErrorMessage error={error}/>}
      {images.length > 0 && <LoadMoreBtn
        onClick={handleClick} />}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          selectedImage={selectedImage}
          shouldCloseOnOverlayClick={true}
        />
      )}
    </>
  )
}

export default App


