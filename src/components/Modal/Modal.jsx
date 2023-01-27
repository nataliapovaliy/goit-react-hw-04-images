import React, {Component} from 'react';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.closeModal)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModal)
    }

    closeModal = event => {
        if (event.code === 'Escape' || event.currentTarget === event.target) {
            this.props.forCloseModal();
        }
    }

    render() {
        return (
        <>
                <div className={css.Overlay}
                    onClick={this.closeModal}>
                <div className={css.Modal}>
                    <img src={this.props.srcLarge} alt=''/>
                </div>
            </div>
        </>
    )
    }
}

Modal.propTypes = {
    srcLarge: PropTypes.string.isRequired,
    forCloseModal: PropTypes.func.isRequired,
}