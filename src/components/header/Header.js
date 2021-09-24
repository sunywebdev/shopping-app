import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className='bg-secondary bg-gradient fw-bold text-warning m-0 pb-3'>Shopping App</h1>
            <div className='bg-dark bg-gradient' >
                <ul className="nav justify-content-center pb-2 ">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">FAQ</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;