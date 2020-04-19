import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cases from './Cases/Cases';
import * as actions from '../../store/action/index';

import UpArrow from '../../assets/Up.png';
import DownArrow from '../../assets/Down.png';
import Graph from '../../assets/Graph.png';
import Graph1 from '../../assets/Graph1.png';
import Graph2 from '../../assets/Graph2.png';
import Graph3 from '../../assets/Graph3.png';

import styles from './LiveData.module.css';

 

class LiveData extends Component{

    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        return(
            <div className={styles.LiveData}> 

                <Cases caseData={this.props.total} graph={Graph}><p>Total Cases<img src={UpArrow} alt="up-arrow"></img> </p></Cases>
                <Cases caseData={this.props.recovered} graph={Graph1}><p>Recovered<img src={DownArrow} alt="up-arrow"></img> </p></Cases>
                <Cases caseData={this.props.active} graph={Graph2}><p>Active Cases<img src={UpArrow} alt="up-arrow"></img> </p></Cases>
                <Cases caseData={this.props.death} graph={Graph3}><p>Total Deaths<img src={UpArrow} alt="up-arrow"></img> </p></Cases>

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