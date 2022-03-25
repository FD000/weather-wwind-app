
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationButtons = () => {


    return (
        <div className="First-page">
            <Link to="/gallery">
                <button>Check Gallery</button>
            </Link>
            <Link to="/upload">
                <button>Upload pictures</button>
            </Link>
        </div>
    )
}

export default NavigationButtons