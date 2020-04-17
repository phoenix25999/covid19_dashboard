import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component{

    state ={
        chartData:{
            labels: this.props.dates,
            datasets: [
                {
                    label: 'Confirmed Cases',
                    data:this.props.totalCases,
                    backgroundColor: 'transparent'
                }
            ]
        }    
    }
    
    render(){
        return(
            <Line
                data={this.state.chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Confirmed cases',
                        fontSize: 20
                    },
                    legend: {
                        display: false
                    }
                }}
            />
        );
        }
}

export default Chart;