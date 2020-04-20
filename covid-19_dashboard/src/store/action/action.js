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



