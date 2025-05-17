import React from 'react';
import Navbar from '../../components/Nav/NavBar.jsx';
import './Home.css';

export default function Home({ theme, toggleTheme }) {
    return (
<div className="content">
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <div className="body-content">
          <p>Check the console to see the products!</p>
          </div>
        </div>
        );
    }