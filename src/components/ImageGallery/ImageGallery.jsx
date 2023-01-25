import { Component } from "react";
import css from '../ImageGallery/ImageGallery.module.css';

class ImageGallery extends Component {
    state = {
        item: null,
        error: '',
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value) {
            this.setState({status: 'pending'})
        }
    }
}

render () {
    return (
        <>
            <ul className={css.ImageGallery}>
                <ImageGalleryItem />
            </ul>
        </>
    )
    }

export default ImageGallery