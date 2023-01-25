import css from '../Button/Button.module.css';

const Button = ({ clickHandler, text }) => {
    return <button
        className={css.Button}
        onClick={clickHandler}>{text}</button>
};

export default Button;