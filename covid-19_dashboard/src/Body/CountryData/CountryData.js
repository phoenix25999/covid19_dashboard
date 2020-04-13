import React, {Component} from 'react';
import ReactToolTip from 'react-tooltip';

import styles from './CountryData.module.css'
import Map from './Map/Map';

class CountryData extends Component{

    state={
        countryData:[],
        csvCountryData: ""
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
                        flagURL: 'https://www.countryflags.io/' + result.data[i].code + '/flat/32.png',
                        coordinates: result.data[i].coordinates
                    })
                }
                updatedCountryData.sort(this.compare);
                this.setState({countryData: updatedCountryData});
                let data = this.state.countryData.map(item=> {
                    return{
                        latitude: item.coordinates.latitude,
                        longitude: item.coordinates.longitude,
                        total: item.totalCases
                    }
                });

                let csvData = this.objToCsv(data);
                this.setState({csvCountryData: csvData});
                // console.log(this.state.csvCountryData);
                
            });         
                     
    }

    objToCsv = (data) => {
                
        const csvRows = [];
        const headers = Object.keys(data[0])
        csvRows.push(headers.join(','));

        // console.log(csvRows)

        for (const row of data) {
            const values = headers.map(header => {
            const escaped = ('' + row[header]).replace(/"/g, '\\"')
            return `"${escaped}"`
            })
            csvRows.push(values.join(','))
        }

        return csvRows.join('\n')
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
                    <Map />
                </div>
            </div>
    );
    }
}

export default CountryData;