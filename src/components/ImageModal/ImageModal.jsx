import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ modalIsOpen, handleCloseModal, selectedImage }) => {
  if (!selectedImage) {
    return null;
  }

  return (
    <Modal
      className={s.Modal}
      overlayClassName={s.Overlay}
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Image Modal"
    >
      <div>
        <img className={s.image} src={selectedImage.urls.regular} alt="Selected" />
      </div>
    </Modal>
  );
};

export default ImageModal;
