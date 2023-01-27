import React, { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from "./Modal/Modal";
import css from '../components/App.module.css';
import { fetchSearch } from '../services/gallery-api';

class App extends Component {
  state = {
    searchText: '',
    images: [],
    page: 1,
    isLoading: false,
    isButton: false,
    imgLarge: '',
  }

  componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;

    if (prevState.searchText !== searchText || prevState.page !== page) {
      this.getGallery();
    }
  }
  
  handleSubmit = (searchText) => {
      this.setState({ searchText, images: [], page: 1 })
    }

  getGallery = () => {
    const { searchText, page } = this.state;
    this.setState({ isLoading: true, isButton: true });

    fetchSearch(searchText, page)
      .then(data => {
        if (data.hits.length < 12) {
          this.setState({ isButton: false });
        }

        if (data.hits.length === 0) {
          alert("No image for this search");
          console.log("No image for this search");
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits]
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  modalImgLarge = srcLarge => {
    this.setState({ imgLarge: srcLarge });
  }

  toogleModal = () => {
    this.setState({ imgLarge: '' });
  }

  render() {
    const { images, isLoading, isButton, imgLarge } = this.state;
    return (
      <>
        <div className={css.App}>
          
          <Searchbar
            onSearch={this.handleSubmit} />
          
          {images.length > 0 && 
          <ImageGallery 
              images={images}
              modalImgLarge={this.modalImgLarge} />}
          
          {images.length !== 0 && isButton &&
          <Button
            clickHandler={this.loadMore}
            text='Load more' /> 
          }
          
          {isLoading && <Loader />}

          {imgLarge && <Modal
            forCloseModal={this.toogleModal}
            srcLarge={imgLarge} />}
          
        </div>
      </>
    )
  }
};

export default App