import React from 'react';

import UpArrow from '../../assets/Up.png';
import Graph from '../../assets/Graph.png';

import styles from './LiveData.module.css';

const liveData = () => {
    return(
        <div className={styles.LiveData}> 
            <div>
                <div>
                    <p>Total Cases<img src={UpArrow} alt="up-arrow"></img> </p>
                    <p>8888888</p>
                </div>
                <img src={Graph} alt="graph" />
            </div>

            <div>
                <div>
                    <p>Total Cases<img src={UpArrow} alt="up-arrow"></img> </p>
                    <p>8888888</p>
                </div>
                <img src={Graph} alt="graph" />
            </div>


            <div>
                <div>
                    <p>Total Cases<img src={UpArrow} alt="up-arrow"></img> </p>
                    <p>8888888</p>
                </div>
                <img src={Graph} alt="graph" />
            </div>


            <div>
                <div>
                    <p>Total Cases<img src={UpArrow} alt="up-arrow"></img> </p>
                    <p>8888888</p>
                </div>
                <img src={Graph} alt="graph" />
            </div>

                
        </div>
    );
}

export default liveData;