import React from "react";
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';
import { useState } from "react";

const Searchbar = (onSearch) => {
    const [value, setValue] = useState('')

    const handleChange = ({ target }) => {
        const {value} = target
        setValue( value )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (value.trim() === '') {
            alert("No image for this search");
            return;
        }
        onSearch(value);
        setValue('')
    }

        return (
            <>
                <header className={css.Searchbar}>
                    <form className={css.SearchForm} onSubmit={handleSubmit}>
                        <button type="submit"
                            className={css.SearchFormBtn}>
                            <span className={css.SearchFormBtnLabel}>Search</span>
                        </button>
                        <input
                            className={css.SearchFormInput}
                            type="search"
                            placeholder="Search images and photos"
                            value={value}
                            onChange={handleChange}
                            />
                    </form>
                </header>
            </>
        );
}

Searchbar.propTypes = {
    onSearch:PropTypes.func.isRequired,
}

export default Searchbar