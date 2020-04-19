import React from 'react';

import styles from './Cases.module.css';

const cases  = (props) =>{
    return(
        <div className={styles.Cases}>
            <div>
                {props.children}
                <p>{props.caseData}</p>
            </div>
            <img src={props.graph} alt="graph" />
        </div>
    );
}

export default cases;