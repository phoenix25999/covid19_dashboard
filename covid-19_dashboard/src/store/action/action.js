import * as actionTypes from './actionTypes';

export const fetchAggregateDataSuccess = ( data ) => {
    return{
        type: actionTypes.FETCH_AGGREGATE_DATA_SUCCESS,
        data: data
    }
}

export const fetchAggregateData = () => {
    return dispatch => {
        fetch('https://api.covid19api.com/summary')
                .then(response=> response.json())
                .then(result=> {
                    dispatch(fetchAggregateDataSuccess(result.Global));
                });       
    }
}

export const fetchCountryDataSuccess = (countryData) => {
    return{
        type: actionTypes.FETCH_COUNTRY_DATA_SUCCESS,
        data: countryData
    }
}

export const fetchCountryData = () => {
   return dispatch => {
    fetch('https://corona-api.com/countries')
        .then(response=>response.json())
        .then(result=> {
            dispatch(fetchCountryDataSuccess(result.data));
        });
   }
}



