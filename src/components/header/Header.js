import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="bg-dark bg-gradient pb-2 sticky-top">
            <ul className="nav justify-content-center pb-2 ">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li>
            </ul>
            <form className="d-flex w-75 mx-auto">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
        </div>
    );
};

export default Header;