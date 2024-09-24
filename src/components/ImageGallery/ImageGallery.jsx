import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <div>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard handleOpenModal={handleOpenModal} image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
