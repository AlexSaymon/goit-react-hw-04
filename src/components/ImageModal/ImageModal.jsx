import Modal from "react-modal";

const ImageModal = ({ modalIsOpen, handleCloseModal, selectedImage }) => {
  if (!selectedImage) {
    return null;
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div>
        <img src={selectedImage.urls.regular} alt="Selected" />
      </div>
    </Modal>
  );
};

export default ImageModal;
