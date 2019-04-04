import React, { useRef } from 'react';
import GalleryListItem from './GalleryListItem.js';

export default function GalleryList() {
    var data = [1, 3, 6, 7, 8];
    return (
        <div>
            <ul>
                {data.map((item) => (
                    <GalleryListItem id={item} />
                ))}
            </ul>
        </div>
    )
}