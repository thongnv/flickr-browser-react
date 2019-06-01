import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FlickrCard from './card/FlickrCard.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        const url = 'https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true';
        axios.get(url).then(response => {
            this.setState({items: response.data.items});
        });
    }

    render() {
        return (
            <div>
                <div className="header">
                    <input className="search-box" type="text" placeholder="Search..."/>
                </div>
                <div className="search-results">
                    <ul>
                        {this.state.items.map((item, index) => <li key={index}><FlickrCard item={item}/></li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;
