import React from 'react';
import { useEffect } from 'react';

export const Music = () => {
    useEffect(() => { document.title = 'Bloofle: Music';  }, []);

    return (
        <div>
            <h1>My Music</h1>
            <p>Run before I walk is normally the thing that everyone says to me, what? i'm just an impatient musician!</p>
        </div>
    );
}