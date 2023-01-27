import { ImageGalleryItem } from './ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, modalImgLarge }) {
    return (
        <ul className={css.ImageGallery}>
            {images.map(({id, webformatURL, tags, largeImageURL}) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        src={webformatURL}
                        alt={tags}
                        srcLarge={largeImageURL}
                        modalImgLarge={modalImgLarge} />
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
    modalImgLarge: PropTypes.func.isRequired,
}