import s from "./ImageCard.module.css";

const ImageCard = ({ image, handleOpenModal }) => {
  return (
    <div>
      <img
        className={s.image}
        onClick={() => handleOpenModal(image)}
        src={image.urls.small}
        alt="Images"
      />
    </div>
  );
};

export default ImageCard;
