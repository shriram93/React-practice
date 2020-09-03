import React from 'react';

class SearchResults extends React.Component {
    render() {
        const { photosList } = this.props;
        return (
        <div>
            {
                photosList.map( photo =>  <img key={photo} src={photo} alt="" />)
            }
        </div>)
    }
}

export default SearchResults;
