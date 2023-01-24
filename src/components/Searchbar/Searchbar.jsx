import React from "react";
import { Component } from "react";
import css from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
    state = {
        value: '',
    }

    handleChange = ({ target: { value } }) => {
        this.setState({value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch(this.state.value)
        this.setState({value: ''})
    }

    render() {
        return (
            <>
                <header className={css.Searchbar}>
                    <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                        <button type="submit" className={css.SearchFormBtn}>
                            <span className={css.SearchFormBtnLabel}>Search</span>
                        </button>
                        <input
                            className={css.SearchFormInput}
                            type="search"
                            // autocomplete="off"
                            // autofocus
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


export default Searchbar