import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    // Check user preference and set initial mode
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedDarkMode = localStorage.getItem('darkMode');
        setDarkMode(storedDarkMode ? JSON.parse(storedDarkMode) : prefersDarkMode);
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    // Apply dark mode class to the body
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);

        // Cleanup function: remove dark mode class when the component unmounts
        return () => {
            document.body.classList.remove('dark-mode');
        };
    }, [darkMode]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <Link className="navbar-brand fs-4" to="/">Learn Online</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/#">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/#">Teachers</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/about">About</Link>
                        </li>
                        {/*
                         <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="/#">Help</a></li>
                                <li><a className="dropdown-item" href="/#">Settings</a></li>
                                <li><a className="dropdown-item" href="/#">Logout</a></li>
                            </ul>
                        </li> */}

                        <li className="nav-item">
                            <button className={styles.darkMode} onClick={toggleDarkMode}>
                                {darkMode ? "☀️" : "🌙"}
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
