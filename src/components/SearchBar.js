import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
    state = {
        term: '',
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value.toUpperCase(),
        });
    }

    render() {
        return (
            <div className="ui segment searchbar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>
                            <span className="searchbar__label-span">Image Search</span>
                            <input value={this.state.term} type="text" onChange={this.onInputChange}/>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
