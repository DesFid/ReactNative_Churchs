// import {
//     FETCHING_DATA, 
//     FETCHING_DATA_SUCCESS,
//     FETCHING_DATA_ERROR} from '../constants/';

// import getDataApi from '../data/data.json'

export const getData = () => {
    return{
        type: FETCHING_DATA
    }
}
export const getDataSuccess = data => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}
export const getDataFailure = () => {
    return {
        type: FETCHING_DATA_ERROR
    }
}

// async thunk fetchData