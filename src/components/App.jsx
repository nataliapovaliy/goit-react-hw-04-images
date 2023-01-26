import React, { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import css from '../components/App.module.css';
import { fetchSearch } from '../services/gallery-api';

class App extends Component {
  state = {
    images: [],
    searchText: '',
    page: 1,
    isListShown: false,
    isLoading: false,
  }

  componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;

    if (prevState.searchText !== searchText || prevState.page !== page) {
      this.getGallery();
    }

    if (prevState.searchText !== searchText && searchText !== '') {
      this.setState({ page: 1, images: [], isListShown: false });
    }
  }
  
  handleSubmit = (searchText) => {
      this.setState({ searchText })
    }

  getGallery = () => {
    const { searchText, page } = this.state;
    this.setState({ isLoading: true });

    fetchSearch(searchText, page)
      .then(data => {
        console.log('hit.length=', data.hits.length);

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits]
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  showGallery = () => {
    this.setState(prevState => ({ isListShown: !prevState.isListShown }));
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <div className={css.App}>
          
          <Searchbar
            onSearch={this.handleSubmit} />
          
          <ImageGallery 
            images={images} /> 
          
          {this.isListShown && 
          <Button
            clickHandler={this.loadMore}
            text='Load more' /> 
          }
          
          
        </div>
      </>
    )
  }
};

export default App