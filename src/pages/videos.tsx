import React from 'react';
import { useEffect } from 'react';

export const Videos = () => {
    useEffect(() => { document.title = 'Bloofle: Videos';  }, []);
    
    return (
        <div>
            <h1>My Videos</h1>
        </div>
    );
}