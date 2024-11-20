import styles from "./ImageModal.module.css"
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
    overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
};

const ImageModal = ({selectedImage, isOpen, onRequestClose}) => {

  return (
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <div>
          <img src={selectedImage.regular} alt={selectedImage.alt} onClick={onRequestClose} />
          <div className={styles.wrapper}>
          <p className={styles.info}>Likes: {selectedImage.likes}</p>
          <p className={styles.info}>Author: {selectedImage.name}</p>
        </div>
        </div>
      </Modal>
  );
};

export default ImageModal;