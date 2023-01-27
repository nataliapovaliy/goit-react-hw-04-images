import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({src, alt, srcLarge, modalImgLarge}) => {
    return (
        <>
            <li className={css.ImageGalleryItem}
                onClick={() => {modalImgLarge(srcLarge)}} >
                <img
                    className={css.ImageGalleryItemImage}
                    src={src} 
                    alt={alt} />

            </li>
        </>
        
    )
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    srcLarge: PropTypes.string.isRequired,
    modalImgLarge: PropTypes.func.isRequired,
}