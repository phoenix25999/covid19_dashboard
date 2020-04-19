import React from 'react';
import LiveData from '../Components/LiveData/LiveData';
import CountryStats from '../Components/CountryStats/CountryStats';
import Map from '../Components/Map/Map';
import SpreadTrends from '../Components/SpreadTrends/SpreadTrends';
import News from '../Components/News/News';
import RecoveryRatio from '../Components/RecoveryRatio/RecoveryRatio';
import Feeds from '../Components/Feeds/Feeds';

import styles from './Home.module.css';


const body = () => {
    return(
        <div className={styles.Home}>
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