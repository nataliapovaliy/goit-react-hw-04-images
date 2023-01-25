import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGalleryItem = ({id, src}) => {
    return (
        <li key={id} className={css.ImageGalleryItem}>
            <img
                className={css.ImageGalleryItemImage}
                src={src} 
                alt="" />
        </li>
    )
}