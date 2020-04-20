import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

import styles from './SpreadTrends.module.css';

class SpreadTrends extends Component{

    state = {
        dates: [],
        totalCases: [],
        recCases:[],
        deaths:[],
        showTotal: true,
        showRec: false,
        showDeaths: false 
    }
    componentDidMount(){
        this.fetchSpreadTrends();
        
        this.intervalId = setInterval(this.fetchSpreadTrends.bind(this), 10000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    fetchSpreadTrends = () => {
        fetch('https://corona.lmao.ninja/v2/historical/all')
            .then(response=> response.json())
            .then(res=> {
                let casesArr = Object.keys(res).map(key=> res[key]);
                
                let total = casesArr[0];
                let dates = Object.keys(total).reverse().slice(0,7).reverse();
                let cnfCases = Object.values(total).reverse().slice(0,7).reverse();

                let recovered = casesArr[1];
                let recoveredCases = Object.values(recovered).reverse().slice(0,7).reverse();

                let death = casesArr[2];
                let deathCases = Object.values(death).reverse().slice(0,7).reverse();

                this.setState({dates:dates, totalCases: cnfCases, recCases: recoveredCases, deaths:deathCases});
                
            });
    }

    onTotalHandler = () =>{
        this.setState({showTotal: true, showRec: false, showDeaths: false});
    }

    onRecHandler = () =>{
        this.setState({showTotal: false, showRec: true, showDeaths: false});
    }

    onDeathHandler = () =>{
        this.setState({showTotal: false, showRec: false, showDeaths: true});
    }

    render(){

        let caseLabel = '';
        let caseData = [];
       

        if(this.state.showTotal){
            caseLabel = 'Confirmed Cases';
            caseData=this.state.totalCases;
        }

        else if(this.state.showRec){
            caseLabel = 'Recovered Cases';
            caseData = this.state.recCases;
        }

        else {
            caseLabel = 'Total Deaths';
            caseData = this.state.deaths;
        }
        
        const chartData = {
            labels: this.state.dates,
            datasets: [
                {
                    label: caseLabel,
                    data: caseData,
                    backgroundColor: 'transparent',
                    borderWidth: '2',
                    borderColor: this.state.showRec ? '#2fd0aa': '#ff0019',
                }
            ]
        }  

        return(
            <div className={styles.SpreadTrends}>
                <div className={styles.Heading}>
                    <h3>Spread Trends</h3>
                    <div>
                        <button onClick = {this.onTotalHandler} className={this.state.showTotal? styles.active: null}>Confirmed</button>
                        <button onClick = {this.onRecHandler} className={this.state.showRec? styles.active: null}>Recovered</button>
                        <button onClick = {this.onDeathHandler} className={this.state.showDeaths? styles.active: null}>Deceased</button>
                    </div>
                </div>
                <Line
                    data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: caseLabel,
                            fontSize: 15,
                            fontColor: this.state.showRec ? '#2fd0aa': '#ff0019'
                        },
                        legend: {
                            display: false
                        },
                        
                    }}
                    
                    
            />
            </div>
        );
    }
}

export default SpreadTrends;