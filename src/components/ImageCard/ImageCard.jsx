const ImageCard = ({ image, handleOpenModal }) => {
  return (
    <div>
      <img onClick={() => handleOpenModal(image)} src={image.urls.small} alt="Images" />
    </div>
  );
};

export default ImageCard;
