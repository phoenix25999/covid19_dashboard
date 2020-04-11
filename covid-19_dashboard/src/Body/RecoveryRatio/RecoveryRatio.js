import React from 'react';
import {connect} from 'react-redux';

import styles from './RecoveryRatio.module.css';

const recoveryRatio = (props) => {
    let recovered = props.recovered;
    let total = props.total;
    if(props.recovered){
    recovered = props.recovered.replace(/,/g, "");
    total = props.total.replace(/,/g, "");
    }
    let ratio = ((recovered/total)*100).toFixed(1);
    return( 
        <div className={styles.RecoveryRatio}>
            <h4>Ratio of Recovery</h4>
            <div>
                <div>{ratio + '%'}</div>
            </div>
            <p>test test test</p>
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








































