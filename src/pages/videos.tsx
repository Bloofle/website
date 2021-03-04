import React from 'react';
import { useEffect } from 'react';
import atlantis from '../media/atlantis.jpg';

export const Videos = () => {
    useEffect(() => { document.title = 'Bloofle: Videos'; }, []);

    return (
        <div>
            <h1>My Videos</h1>
        </div>
    );
}