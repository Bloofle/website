import React from 'react';
import { useEffect } from 'react';

export const Music = () => {
    useEffect(() => { document.title = 'Bloofle: Music';  }, []);

    return (
        <div>
            <h1>My Music</h1>
        </div>
    );
}