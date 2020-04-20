import React, {Component} from 'react';

import styles from './CountryStats.module.css';
class CountryStats extends Component{

    state={
        countryData:[],
        searchedValue: null
    }


    componentDidMount(){
        this.fetchCountryData();
        
        this.intervalId = setInterval(this.fetchCountryData.bind(this), 10000);             
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    fetchCountryData = () => {
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
                        coordinates: result.data[i].coordinates,
                        code: result.data[i].code
                    })
                }
                updatedCountryData.sort(this.compare);
                this.setState({countryData: updatedCountryData});
            }); 
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

    onChangeHandler = (event) => {
        event.preventDefault();
        const searchedVal = event.target.value.toLowerCase();
        this.setState({searchedValue: searchedVal});
    }


    render(){
        
        const searched = this.state.countryData.filter(data=> {
                return this.state.searchedValue ==null ? data : data.name.toLowerCase().includes(this.state.searchedValue);
        })

        const countryList = searched.map(res=>{
                                return <li key={res.name}>
                                    <p><img src={res.flagURL} alt="flag" />{res.name}</p>
                                    <p>{res.totalCases.toString().length > 3 ? (res.totalCases/1000).toFixed(1) + 'k' : res.totalCases} Affected | 
                                    {res.recoveredCases.toString().length > 2 ? (res.recoveredCases/1000).toFixed(1) + 'k' : res.recoveredCases} Recovered</p>
                                        </li>
                                });       
        return(
            <div className={styles.CountryStats}>
                <div>
                    <input type="text" placeholder="Search" onChange={this.onChangeHandler} />
                    <ul>
                        {countryList}
                    </ul>
                </div>
            </div>
    );
    }
}

export default CountryStats;