import React from 'react';
import { useEffect } from 'react';

export const Drawings = () => {
    useEffect(() => { document.title = 'Bloofle: Drawings';  }, []);
    
    return (
        <div>
            <h1>My Drawings</h1>
            <p>Yes I draw too! Here are some of my artworks. Pretty cool huh?</p>
        </div>
    );
}