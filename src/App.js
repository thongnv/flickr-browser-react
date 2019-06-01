import React from 'react';
import axios from 'axios';
import './App.css';
import FlickrCard from './card/FlickrCard.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.getData();
    }

    render() {
        return (
            <div>
                <div className="header">
                    <input className="search-box" type="text" placeholder="Search..."
                           onKeyUp={this.searchKeyUpHandler.bind(this)} ref="searchInput"/>
                </div>
                <div className="search-results">
                    <ul>
                        {this.state.items.map((item, index) => <li key={index}><FlickrCard item={item}/></li>)}
                    </ul>
                    {!this.state.items.length &&
                    <div className="no-results">
                        No results
                    </div>
                    }
                </div>
            </div>
        )
    }

    searchKeyUpHandler(refName) {
        this.getData(refName.target.value);
    }

    getData(input = '') {
        const url = 'https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true';
        axios.get(`${url}&tags=${input}`).then(response => {
            this.setState({items: response.data.items});
        });
    }
}

export default App;
