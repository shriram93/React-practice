import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import axios from 'axios';

class App extends React.Component {
    state = {
        photosList: []
    }

    updateSearchTerm = (newSearchTerm) => {
        if (newSearchTerm && newSearchTerm.length >= 3) {
            axios.get(`https://api.unsplash.com/search/photos?query=${newSearchTerm}&client_id=sW7rD3erpNiUkOWCFcqXHgsHiXclFkeWpHjkZmAzkjU&per_page=10`).then(result => {
                console.log(result);
                if (result && result.data && result.data.results) {
                    const photosList = [];
                    for (const urlResult of result.data.results) {
                        photosList.push(urlResult.urls.small);
                    }
                    this.setState({
                        photosList: [
                            ...photosList
                        ]
                    })
                }
            })
        }

    }

    render() {
        return (<div>
            <SearchBar updateSearchTerm={this.updateSearchTerm} />
            <SearchResults photosList={this.state.photosList}/>
        </div>)
    }
}

export default App;