import React, { useRef } from 'react';
import GalleryListItem from './GalleryListItem.js';
import '../Styles/GalleryList.css';

export default function GalleryList() {
    var data = [1, 3, 6, 7, 8];
    return (
        <div className="gallery-list">
            <div className="header">
                <h1>The Galleries</h1>
            </div>
            
            <ul>
                {data.map((item) => (
                    <GalleryListItem id={item} />
                ))}
            </ul>
        </div>
    )
}