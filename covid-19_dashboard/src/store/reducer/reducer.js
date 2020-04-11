import * as actionTypes from '../action/actionTypes';

const initialState = {
    total: 0,
    recovered: 0,
    active: 0,
    death:0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_AGGREGATE_DATA_SUCCESS:
            return{
                ...state,
                total: action.data.total_cases,
                recovered: action.data.recovery_cases,
                active: action.data.currently_infected,
                death: action.data.death_cases
            };
        default:
            return state;
    }
}

export default reducer;