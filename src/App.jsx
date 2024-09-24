import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchArticles } from "./Services/api";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ErrorMesage from "./components/ErrorMessage/ErrorMesage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(page, query);
        setImages((prev) => [...prev, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;
    if (form.elements.query.value.trim() === "") {
      toast.error("This field can't be empty");
      return;
    }
    setQuery(query);
    form.reset();
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleOpenModal = (image) => {
    setModalIsOpen(true);
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} handleOpenModal={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMesage />}
      {images.length > 0 ? <LoadMoreBtn handleLoadMore={handleLoadMore} /> : null}
      <ImageModal
        handleCloseModal={handleCloseModal}
        modalIsOpen={modalIsOpen}
        selectedImage={selectedImage}
      />
      <Toaster />
    </>
  );
}

export default App;
