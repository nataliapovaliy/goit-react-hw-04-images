import React, { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGalleryItem';
// import Button from './Button/Button';
import css from '../components/App.module.css';


// 17988471-599edd7bd30320e243c69934a

class App extends Component {

  state = {
    searchText: '',
    page: 1,
  }

  handleSubmit = (searchText) => {
    this.setState({searchText})
  }
  
  render() {
    return (
      <>
        <div className={css.App}>
          <Searchbar onSearch={this.handleSubmit} />
          {/* <ImageGallery />
          <Button /> */}
        </div>
      </>
    )
  }
};

export default App