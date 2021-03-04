import React from 'react';
import { useEffect } from 'react';

export const Drawings = () => {
    useEffect(() => { document.title = 'Bloofle: Drawings';  }, []);
    
    return (
        <div>
            <h1>My Drawings</h1>
        </div>
    );
}