import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/action/index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import styles from './CountryStats.module.css';
class CountryStats extends Component{

    state={
        countryData:[],
        searchedValue: null
    }


    componentDidMount(){
        this.props.fetchCountryData();
        
        this.intervalId = setInterval(this.props.fetchCountryData.bind(this), 10000);             
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
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
        const searched = this.props.countryData.sort(this.compare).filter(data=> {
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
                    <div className={styles.Search}>
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder="Search Location" onChange={this.onChangeHandler} />
                    </div>
                    <ul>
                        {countryList}
                    </ul>
                </div>
            </div>
    );
    }
}

const mapStateToProps = state=> {
    return{
        countryData: state.countryData
    }
};

const mapDispatchToProps = dispatch=> {
    return{
        fetchCountryData: ()=> dispatch(actions.fetchCountryData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryStats);