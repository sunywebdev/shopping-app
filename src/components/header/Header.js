import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
              <div className='bg-dark bg-gradient' >
                <ul className="nav justify-content-center pb-2 m-0">
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