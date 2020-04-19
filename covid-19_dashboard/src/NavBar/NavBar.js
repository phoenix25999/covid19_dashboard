import React, { useState } from 'react';
import NavItem from './NavItem/NavItem';
import SideDrawer from '../SideDrawer/SideDrawer';

import styles from './NavBar.module.css';
import VirusLogo from '../assets/virus.png';

const NavBar = () => {
    
    const[showSideDrawer, setShowSideDrawer] = useState(false);

    return(
        <header className={styles.NavBar}>
            
                <ul>
                    <li><a href='/' ><img src={VirusLogo} alt='logo' /></a></li>
                    <li><a href='/' >COVID-19</a></li>
                </ul>
                    
                <nav >
                    <ul>
                        <NavItem link='/' exact>HOME</NavItem>
                        <NavItem link='/FAQ'>FAQ</NavItem>
                        <NavItem link='/helpful-links'>HELPFUL LINKS</NavItem>
                    </ul>
                </nav>

                <div className={styles.DrawerToggle} onClick={()=> setShowSideDrawer(!showSideDrawer)} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                {showSideDrawer ? <SideDrawer open={showSideDrawer} close={()=>setShowSideDrawer(!showSideDrawer)} /> : null}
            
        </header>
    );
}

export default NavBar;