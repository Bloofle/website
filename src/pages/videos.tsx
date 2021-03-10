import React from 'react';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import atlantis from '../media/atlantis.jpg';

export const Videos = () => {
    useEffect(() => { document.title = 'Bloofle: Videos'; }, []);

    return (
        <div>
            <h1>My Videos</h1>
            <p>Have fun binging my videos! They are interesting so you won't get bored.</p>
            <ReactPlayer url="https://www.youtube.com/watch?v=_-TltwqkOI8" />
            <ReactPlayer url="https://www.youtube.com/watch?v=EmAK6SdioI4&t=8s" />
        </div>
    );
}