import React from 'react';
import LiveData from '../LiveData/LiveData';
import CountryStats from '../CountryStats/CountryStats';
import Map from '../Map/Map';
import SpreadTrends from '../SpreadTrends/SpreadTrends';
import News from '../News/News';
import RecoveryRatio from '../RecoveryRatio/RecoveryRatio';
import Feeds from '../Feeds/Feeds';

import styles from './Body.module.css';


const body = () => {
    return(
        <div className={styles.Body}>
                <div>
                    <LiveData />
                    <div className={styles.Country}>
                        <CountryStats />
                        <Map />
                    </div>
                    <div className={styles.Updates}>
                        <SpreadTrends />
                        <News />
                    </div>
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