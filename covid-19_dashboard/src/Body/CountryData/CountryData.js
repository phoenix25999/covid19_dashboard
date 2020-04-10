import React, {Component} from 'react';

import Map from '../../assets/map.png';

import styles from './CountryData.module.css'

class CountryData extends Component{

    state={
        countryData:[]
    }

    componentDidMount(){
        fetch('https://corona-api.com/countries')
            .then(res=> res.json())
            .then(result=> {
                const updatedCountryData=[];
                for(let i in result.data){
                    updatedCountryData.push({
                        name: result.data[i].name,
                        totalCases: result.data[i].latest_data.confirmed,
                        recoveredCases: result.data[i].latest_data.recovered,
                        flagURL: 'https://www.countryflags.io/' + result.data[i].code + '/flat/32.png'
                    })
                }

                updatedCountryData.sort(this.compare);
                this.setState({countryData: updatedCountryData});
                console.log(this.state.countryData);
            })       
    }

    compare = (a,b) => {

        let caseA = a.totalCases;
        let caseB = b.totalCases
        let comp = 0;
        if(caseA > caseB){
            comp = -1;
        } else if(caseA < caseB){
            comp = 1;
        }
        return comp;
    }


    render(){


        const countryList = this.state.countryData.map(res=>{
                                return <li key={res.name}>
                                    <p><img src={res.flagURL} alt="flag" />{res.name}</p>
                                    <p>{res.totalCases.toString().length > 3 ? (res.totalCases/1000).toFixed(1) + 'k' : res.totalCases} Affected | 
                                    {res.recoveredCases.toString().length > 2 ? (res.recoveredCases/1000).toFixed(1) + 'k' : res.recoveredCases} Recovered</p>
                                        </li>
                                });       
        return(
            <div className={styles.CountryData}>
                <div>
                    <input type="text" placeholder="Search" />
                    <ul>
                        {countryList}
                    </ul>
                </div>

                <div>
                    <img src={Map} alt="map" />
                </div>
            </div>
    );
    }
}

export default CountryData;