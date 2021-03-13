import React from 'react';

import SearchBar from './SearchBar';
import './App.css';

class App extends React.Component {
    onSearchSubmit = (term) => {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container app">
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
