// import styles from "./ImageModal.module.css"
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

const ImageModal = ({ selectedImage: {regular, description},
  isOpen, onRequestClose }) => {
  
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
          <div>
            <img src={regular} alt={description} onClick={onRequestClose} />
          </div>
      </Modal>
    </div>
  );
};

export default ImageModal