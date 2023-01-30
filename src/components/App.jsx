import { useState } from "react";
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from "./Modal/Modal";
import css from '../components/App.module.css';
import { fetchSearch } from '../services/gallery-api';
import { useEffect } from "react";

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isButton, setIsButton] = useState(false)
  const [imgLarge,setImgLarge] = useState('')

  useEffect(() => {
    console.log('useEffect>>');
    setIsLoading(true)
    setIsButton(true)

    fetchSearch(searchText, page)
      .then(data => {
        if (data.hits.length < 12) {
          setIsButton(false)
        }

        if (data.hits.length === 0) {
          alert("No image for this search");
          console.log("No image for this search");
        }

        setImages(images => [...images, ...data.hits]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [searchText, page]);
  
  const handleSubmit = (searchText) => {
    setSearchText(searchText);
    setImages([]);
    setPage(1);
    }

  const loadMore = () => {
    setPage(page + 1);
  }

  const modalImgLarge = srcLarge => {
    setImgLarge(srcLarge);
  }

  const toogleModal = () => {
    setImgLarge('')
  }

    return (
      <>
        <div className={css.App}>
          
          <Searchbar
            onSearch={handleSubmit} />
          
          {images.length > 0 && 
          <ImageGallery 
              images={images}
              modalImgLarge={modalImgLarge} />}
          
          {images.length !== 0 && isButton &&
          <Button
            clickHandler={loadMore}
            text='Load more' /> 
          }
          
          {isLoading && <Loader />}

          {imgLarge && <Modal
            forCloseModal={toogleModal}
            srcLarge={imgLarge} />}
          
        </div>
      </>
    )
  }


export default App