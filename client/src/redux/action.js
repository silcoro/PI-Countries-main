import {
    GET_COUNTRIES,
    SORT_ASC_COUNTRIE,
    SORT_DESC_COUNTRIE,
    POPULATION_ASC_COUNTRIE,
    POPULATION_DESC_COUNTRIE,
    COUNTRIE_BY_ID,
    GET_COUNTRIES_NAME,
    UNMOUNT_CHARACTER_BY_ID,
    CREATE_COUNTRIE,
    FILTER_CONTINENTS,
    FILTER_ACTIVITY
} from './constants.js'


import axios from 'axios';

export function getcountries(){
    return dispatch=>{
        axios.get(`http://localhost:3001/countries`)
        .then((result) => {
            return dispatch({
                type:GET_COUNTRIES,
                payload:result.data
            })
        }).catch((err) => {
            console.log(`err`, err)
        });
    }
}
export function getcountriesName(name){
    let act = name?name:"."
    return dispatch=>{
        axios.get(`http://localhost:3001/countries?name=${act}`)
        .then((result) => {
            return dispatch({
                type:GET_COUNTRIES_NAME,
                payload:result.data
            })
        }).catch((err) => {
            console.log(`err`, err)
        });
    }
}

export function sortAscCountrie(order){
    return{
        type:SORT_ASC_COUNTRIE,
        payload:order
    }
}

export function sortDescCountrie(order){
    return{
        type:SORT_DESC_COUNTRIE,
        payload:order
    }
}

export function populationAscCountrie(order){
    return{
        type:POPULATION_ASC_COUNTRIE,
        payload:order
    }
}

export function populationDescCountrie(order){
    return{
        type:POPULATION_DESC_COUNTRIE,
        payload:order
    }
}

export function countrieById(id){
    return dispatch => {
        axios.get(`http://localhost:3001/countries/${id}`)
        .then(result => 
            dispatch({
                type: COUNTRIE_BY_ID,
                payload:result.data
            }))
    }
}

export function unmountCharacterById(){
    return {
                type:UNMOUNT_CHARACTER_BY_ID, 
                payload:{}
            }    
}

export function create_activity(countries){
    return dispatch=>{
        axios.post(`http://localhost:3001/activity`,countries)
        .then(result => dispatch({
                type:CREATE_COUNTRIE,
                payload:result.data
            })
            )
    }
}

export function filter_continents(filter){
    return{
        type:FILTER_CONTINENTS,
        payload:filter
    }
}

export function filter_activity(filter){
    return{
        type:FILTER_ACTIVITY,
        payload:filter
    }
}