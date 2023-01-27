import React from "react";
import PropTypes from 'prop-types';
import { Component } from "react";
import css from '../Searchbar/Searchbar.module.css';

export default class Searchbar extends Component {
    state = {
        value: '',
    }

    handleChange = ({ target: { value } }) => {
        this.setState({ value })
    }

    handleSubmit = (event) => {
        const { value } = this.state;
        event.preventDefault()
        if (value.trim() === '') {
            alert("No image for this search");
            return;
        }
        this.props.onSearch(value);
        this.setState({value: ''})
    }

    render() {
        return (
            <>
                <header className={css.Searchbar}>
                    <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                        <button type="submit"
                            className={css.SearchFormBtn}>
                            <span className={css.SearchFormBtnLabel}>Search</span>
                        </button>
                        <input
                            className={css.SearchFormInput}
                            type="search"
                            placeholder="Search images and photos"
                            value={this.state.value}
                            onChange={this.handleChange}
                            />
                    </form>
                </header>
            </>
        );
    }
}

Searchbar.propTypes = {
    onSearch:PropTypes.func.isRequired,
}