import React from 'react';
import './FlickrCard.css'

function FlickrCard(props) {
    const item = props.item;
    return <div className="card-item">
        <a className="thumbnail" href={item.link} rel="noopener noreferrer" target="_blank"><img src={item.media.m} alt=""/></a>
        <ul className=" description">
            <li>
                <span className="label">Title: </span>{item.title}
            </li>
            <li>
                <span className="label">Author: </span>{extractAuthor(item.author)}
            </li>
            <li>
                <span className="label">Tags: </span>{item.tags}
            </li>
        </ul>
    </div>;
}

function extractAuthor(value = '') {
    const authorRegex = '(?<=").+(?=")';
    return value.match(authorRegex) ? value.match(authorRegex)[0] : '';
}

export default FlickrCard;
