import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGalleryItem = ({src}) => {
    return (
        <>
            <li className={css.ImageGalleryItem}>
                <img
                    className={css.ImageGalleryItemImage}
                    src={src} 
                    alt="" />
            </li>
        </>
        
    )

}