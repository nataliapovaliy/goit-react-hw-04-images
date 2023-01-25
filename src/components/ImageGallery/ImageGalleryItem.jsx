import css from '../ImageGallery/ImageGallery.module.css';

const ImageGalleryItem = () => {
    return (
        <li className={css.ImageGalleryItem}>
            <img
                className={css.ImageGalleryItemImage}
                src=""
                alt="" />
        </li>
    )
}