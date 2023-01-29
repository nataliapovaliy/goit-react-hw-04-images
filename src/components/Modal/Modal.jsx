import {useEffect} from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

const Modal = (forCloseModal, srcLarge) => {
    useEffect(() => {
        const closeModal = event => {
            if (event.code === 'Escape' || event.currentTarget === event.target) {
                forCloseModal();
            }
            
        window.addEventListener('keydown', closeModal())
        window.removeEventListener('keydown', closeModal())

        
    }
    }, [forCloseModal])

        return (
        <>
                <div className={css.Overlay}
                    onClick={forCloseModal}>
                <div className={css.Modal}>
                    <img src={srcLarge} alt=''/>
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    srcLarge: PropTypes.string.isRequired,
    forCloseModal: PropTypes.func.isRequired,
}

export default Modal