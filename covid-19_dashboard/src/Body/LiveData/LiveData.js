import React, {Component} from 'react';
import Cases from './Cases/Cases';

import UpArrow from '../../assets/Up.png';

import styles from './LiveData.module.css';

 

class LiveData extends Component{

    state = {
        total: 0,
        recovered: 0,
        active: 0,
        death: 0 
    }
    
    componentDidMount(){
        fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
                .then(response=> response.json())
                .then(result=> {
                    
                    this.setState({
                        total: result.data.total_cases,
                        recovered: result.data.recovery_cases,
                        active: result.data.currently_infected,
                        death: result.data.death_cases
                    });
                    console.log(this.state);
                } );
    }

    render(){
        return(
            <div className={styles.LiveData}> 

                <Cases caseData={this.state.total}><p>Total Cases<img src={UpArrow} alt="up-arrow"></img> </p></Cases>
                <Cases caseData={this.state.recovered}><p>Recovered<img src={UpArrow} alt="up-arrow"></img> </p></Cases>
                <Cases caseData={this.state.active}><p>Active Cases<img src={UpArrow} alt="up-arrow"></img> </p></Cases>
                <Cases caseData={this.state.death}><p>Total Deaths<img src={UpArrow} alt="up-arrow"></img> </p></Cases>

            </div>
        );
    }
}

export default LiveData;