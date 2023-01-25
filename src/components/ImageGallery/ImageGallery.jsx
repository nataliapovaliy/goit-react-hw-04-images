import { ImageGalleryItem } from './ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

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

