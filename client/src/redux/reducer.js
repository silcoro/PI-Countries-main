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


const initialState={
    getcountries:[],
    countrie_id:{},
    getCountrieName:[],
    create_countrie:{},
    actividades:[]
}

function reducer(state = initialState, action){
    
    if (action.type === GET_COUNTRIES) {
        return {
            ...state,
            getcountries: action.payload
        }
    }
    
    if (action.type === GET_COUNTRIES_NAME) {
        return {
            ...state,
            getCountrieName: action.payload
        }
    }


    if (action.type === SORT_ASC_COUNTRIE) {
        let sorted = state.getcountries.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
            return {
                ...state,
                getcountries: sorted
            } 
    }

    if (action.type === SORT_DESC_COUNTRIE) {
        let sorted = state.getcountries.sort((a,b)=> b.name.toLowerCase().localeCompare(a.name.toLowerCase()));

        return{
            ...state,
            getcountries: sorted
        }
    }

    if (action.type ===POPULATION_ASC_COUNTRIE) {
        let population = state.getcountries.sort((a,b)=>(a.population)-(b.population))
        return {
            ...state,
            getcountries:population
        }
    }
    
    if (action.type ===POPULATION_DESC_COUNTRIE) {
        let population = state.getcountries.sort((a,b)=>(b.population)-(a.population))
        return {
            ...state,
            getcountries:population
        }
    }
    
    if (action.type ===COUNTRIE_BY_ID) {
        return {
            ...state,
            countrie_id:action.payload
        }
    }
    if (action.type=== UNMOUNT_CHARACTER_BY_ID) {
        return{
            ...state,
            poke_id:action.payload
        }
    }

    if (action.type === CREATE_COUNTRIE) {
        return{
            ...state,
            create_countrie:action.payload
        }
    }
    
    if (action.type === FILTER_CONTINENTS) {
        let x = state.getcountries.filter(e=> e.continents.includes(action.payload))
        return{
            ...state,
            getcountries:x
        }
    }

    
    if (action.type === FILTER_ACTIVITY) {
        let x = state.getcountries.filter(e=> e.activities.find(a => a.name===action.payload))

        return{
            ...state,
            getcountries:x
        }
    }
    return state
}

export default reducer;