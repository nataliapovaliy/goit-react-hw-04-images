import css from '../Button/Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ clickHandler, text }) => {
    return <button
        className={css.Button}
        onClick={clickHandler}>{text}</button>
};

Button.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button;