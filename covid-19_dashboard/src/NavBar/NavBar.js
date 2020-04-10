import React from 'react';
import styles from './NavBar.module.css';
import VirusLogo from '../assets/virus.png';

const navBar = () => {
    return(
        <header className={styles.NavBar}>
            
                <ul>
                    <li><a href='/' ><img src={VirusLogo} alt='logo' /></a></li>
                    <li><a href='/' >COVID-19</a></li>
                </ul>
                    
                <nav >
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">HELPFUL LINKS</a></li>
                    </ul>
                </nav>
            
        </header>
    );
}

export default navBar;