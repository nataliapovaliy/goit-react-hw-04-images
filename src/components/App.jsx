import React, { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGalleryItem';
// import Button from './Button/Button';
import css from '../components/App.module.css';
// import { fetchSearch } from '../services/gallery-api';

class App extends Component {

  state = {
    images: [],
    searchText: '',
    page: 1,
    isListShown: false,
  }

  handleSubmit = (searchText) => {
		this.setState({ searchText })
	}

  // getGallery = () => {
  //   fetchSearch(this.state.searchText, this.state.page)
  //     .then(data => {
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...data.hits]
  //       }))
  //   })
  // }

// clickHandler =() => {}

  render() {
    return (
      <>
        <div className={css.App}>
          <Searchbar onSearch={this.handleSubmit} />
          {/* <ImageGallery /> */}
          {/* <Button onClick={this.clickHandler} text='Load more'/> */}
        </div>
      </>
    )
  }
};

export default App