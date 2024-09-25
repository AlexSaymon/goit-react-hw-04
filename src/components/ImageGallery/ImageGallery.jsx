import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <div>
      <ul className={s.imageList}>
        {images.map((image) => (
          <li className={s.imageItem} key={image.id}>
            <ImageCard handleOpenModal={handleOpenModal} image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
