import React from 'react';
import {connect} from 'react-redux';

import styles from './RecoveryRatio.module.css';

const circleConfig = {
    viewBox: '0 0 38 38',
    x: '19',
    y: '19',
    radio: '15.91549430918954'
  };

const recoveryRatio = (props) => {
    let recovered = props.recovered;
    let total = props.total;
    
    let ratio = ((recovered/total)*100).toFixed(1);
    return( 
        <div  className={styles.RecoveryRatio}> 
            <h4>Ratio of Recovery</h4>
            <figure>
                <svg viewBox={circleConfig.viewBox}>
                    <circle
                        cx={circleConfig.x}
                        cy={circleConfig.y}
                        r={circleConfig.radio}
                        fill="#f5f5f5"
                        stroke="#f5f5f5"
                    />

                    <circle
                        cx={circleConfig.x}
                        cy={circleConfig.y}
                        r={circleConfig.radio}
                        fill="transparent"
                        stroke="#06BA90"
                        strokeWidth="0.5"
                        strokeDasharray={`${ratio} ${100 - ratio}`}
                        strokeDashoffset="25"
                    />

                    <filter id="shadow2">
                        <feDropShadow dx="0" dy="0" stdDeviation="2" 
                            flood-color="#2FD0AA26"/>
                    </filter>
                    <circle 
                        cx={circleConfig.x}
                        cy={circleConfig.y}
                        r="10"
                        fill="#fff"
                        filter="url(#shadow2)"
                    />

                    <g className={styles.circle}>
                    <text x="50%" y="45%" >
                        {ratio+'%'}
                    </text>
                    </g> 
                </svg>
        </figure>
        <p>{(total/1000).toFixed(1) + 'k'} Affected | {(recovered/1000).toFixed(1) + 'k'} Recovered</p>
    </div>
    );
}

const mapStateToProps = state => {
    return{
        total: state.total,
        recovered: state.recovered
    }
}

export default connect(mapStateToProps)(recoveryRatio);








































