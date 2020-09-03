import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    onInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { updateSearchTerm }= this.props;
        updateSearchTerm(this.state.searchTerm)
    }

    render() {
        return (<form onSubmit={this.onFormSubmit}>
            <input type="text" value={this.state.searchTerm} onChange={this.onInputChange} />
        </form>)
    }
}

export default SearchBar;



