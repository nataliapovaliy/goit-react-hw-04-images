import { ImageGalleryItem } from './ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
    return (
        <ul className={css.ImageGallery}>
            {images.map(({id, webformatURL}) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        src={webformatURL} />
                )
            })
            }
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape()
    ).isRequired,
}