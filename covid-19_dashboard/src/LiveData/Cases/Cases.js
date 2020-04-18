import React from 'react';


import Graph from '../../assets/Graph.png';

import styles from './Cases.module.css';

const cases  = (props) =>{
    return(
        <div className={styles.Cases}>
            <div>
                {props.children}
                <p>{props.caseData}</p>
            </div>
            <img src={Graph} alt="graph" />
        </div>
    );
}

export default cases;