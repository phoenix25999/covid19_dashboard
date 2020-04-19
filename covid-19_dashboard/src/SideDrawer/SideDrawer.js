import React from 'react';
import NavItem from '../NavBar/NavItem/NavItem';
import Backdrop from './Backdrop/Backdrop';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {

    let attachedClasses = [styles.SideDrawer, styles.Close];

    if(props.open){
        attachedClasses = [styles.SideDrawer, styles.Open];
    }

    return (
        <div>
            <Backdrop show={props.open} clicked={props.close} />
            <div className={attachedClasses.join(' ')}>
                
                    <ul>
                        <NavItem link='/' exact>HOME</NavItem>
                        <NavItem link='/FAQ'>FAQ</NavItem>
                        <NavItem link='/helpful-links'>HELPFUL LINKS</NavItem>
                    </ul>
                
            </div>
        </div>
    );
}

export default sideDrawer;