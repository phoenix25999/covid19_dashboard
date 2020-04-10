import React from 'react';

import Map from '../../assets/map.png';

import styles from './CountryData.module.css'

const countryData = () => {
    return(
        <div className={styles.CountryData}>
            <div>
                <input type="text" />
                <ul>
                    <li>United States</li>
                    <li>United States</li>
                    <li>United States</li>
                    <li>United States</li>
                    <li>United States</li>
                    <li>United States</li>
                    <li>United States</li>
                    <li>United States</li>
                    <li>United States</li>
                </ul>
            </div>

            <div>
                <img src={Map} alt="map" />
            </div>
        </div>
    );
}

export default countryData;