import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
// import Chart from '../Body/Updates/Chart/Chart';

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
        fetch('https://corona.lmao.ninja/v2/historical/all')
            .then(response=> response.json())
            .then(res=> {
                let casesArr = Object.keys(res).map(key=> res[key]);
                
                let total = casesArr[0];
                let dates = Object.keys(total);
                let cnfCases = Object.values(total);

                let recovered = casesArr[1];
                let recoveredCases = Object.values(recovered);

                let death = casesArr[2];
                let deathCases = Object.values(death);

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
                    borderColor: this.state.showRec ? '#00ff00': '#ff0019',
                }
            ]
        }  

        return(
            <div className={styles.SpreadTrends}>
                <div className={styles.Heading}>
                    <h3>Spread Trends</h3>
                    <div>
                        <button onClick = {this.onTotalHandler}>Confirmed</button>
                        <button onClick = {this.onRecHandler}>Recovered</button>
                        <button onClick = {this.onDeathHandler}>Deceased</button>
                    </div>
                </div>
                <Line
                    data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: caseLabel,
                            fontSize: 20,
                            fontColor: "#ff0019"
                        },
                        legend: {
                            display: true,
                            backgroundColor: "#ff0019"
                        },
                        showLines: false,
                        maintainAspectRatio: false
                    }}
                    height={200}
                    width={300}
                    
            />
            </div>
        );
    }
}

export default SpreadTrends;