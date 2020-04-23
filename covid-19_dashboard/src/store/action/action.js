import * as actionTypes from './actionTypes';

export const fetchAggregateDataSuccess = ( data ) => {
    return{
        type: actionTypes.FETCH_AGGREGATE_DATA_SUCCESS,
        data: data
    }
}

export const fetchAggregateData = () => {
    return dispatch => {
        fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
                .then(response=> response.json())
                .then(result=> {
                    dispatch(fetchAggregateDataSuccess(result.data));
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



