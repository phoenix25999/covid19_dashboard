import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cases from './Cases/Cases';
import * as actions from '../store/action/index';

import UpArrow from '../assets/Up.png';

import styles from './LiveData.module.css';

 

class LiveData extends Component{

    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        return(
            <div className={styles.LiveData}> 

                <Cases caseData={this.props.total}><p>Total Cases<img src={UpArrow} alt="up-arrow"></img> </p></Cases>
                <Cases caseData={this.props.recovered}><p>Recovered<img src={UpArrow} alt="up-arrow"></img> </p></Cases>
                <Cases caseData={this.props.active}><p>Active Cases<img src={UpArrow} alt="up-arrow"></img> </p></Cases>
                <Cases caseData={this.props.death}><p>Total Deaths<img src={UpArrow} alt="up-arrow"></img> </p></Cases>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        total: state.total,
        recovered: state.recovered,
        active: state.active,
        death: state.death
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchData: () => dispatch(actions.fetchAggregateData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveData);