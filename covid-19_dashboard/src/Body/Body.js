import React from 'react';
import LiveData from './LiveData/LiveData';
import CountryData from './CountryData/CountryData';
import Updates from './Updates/Updates';
import RecoveryRatio from './RecoveryRatio/RecoveryRatio';
import Feeds from './Feeds/Feeds';

import styles from './Body.module.css';


const body = () => {
    return(
        <div className={styles.Body}>
                <div>
                <LiveData />
                <CountryData />
                <Updates />
                </div>
                
                <div>
                    <div>
                    <RecoveryRatio />
                    <Feeds />
                    </div>
                </div>
            
        </div>
    );
}

export default body;