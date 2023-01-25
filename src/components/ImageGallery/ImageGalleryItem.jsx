import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGalleryItem = ({id, webformatURL}) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img
                key={id}
                className={css.ImageGalleryItemImage}
                src={webformatURL} 
                alt="" />
        </li>
    )
}