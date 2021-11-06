import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { filter_activity, filter_continents, getcountries } from "../../redux/action";
import './Filters.css';


export default function Filters(){

const getcountries_1 = useSelector(state => state.getcountries)

const dispatch = useDispatch()
const history = useHistory()

/****filter por continente */
const newarray = getcountries_1.map(e => e.continents)
const newcountrie = newarray.filter((ele,index)=> newarray.indexOf(ele)=== index)
/******end filter por continente */

/****filter por actividades**** */
const newarraycontine1 = getcountries_1.flatMap(e=> e.activities)
const act = newarraycontine1.map((e)=> e.name)
const actividad = act.filter((ele,index)=> act.indexOf(ele)=== index)
/***end filer pot actividades */

function handleChangeContinents(e){
    if (e.target.value) {
        dispatch(filter_continents(e.target.value))
        history.push("/countries")
    }    
}
function handleChangeActivity(e){ 
    if (e.target.value) {
        dispatch(filter_activity(e.target.value))
        history.push("/countries")
    }    
}

useEffect(() => {
   dispatch(getcountries())
}, [dispatch])


    return(
        <div className="container-filter">
            <div className="border-caja">
                <p className="titulo-caja">Filtrar x Continente</p>                
                <select className="select-home" defaultValue={'default'} onChange={handleChangeContinents}>
                    <option  value="default" disabled >Select</option>
                    {   
                        newcountrie.map((e,index) => {
                            return(
                                <option key={index} >{e}</option>
                            )
                        })
                        
                    }
                </select>                
            </div> 
            <div className="border-caja">
                <p className="titulo-caja">Filtrar x actividad</p>                
                <select className="select-home-actividad" defaultValue={'default'} onChange={handleChangeActivity}>
                    <option value="default" disabled >Select</option>
                    {   
                        actividad.map((e,index) => {
                            return(
                                <option key={index} >{e}</option>
                            )
                        })
                        
                    }
                </select>                
            </div> 



        </div>
    )
}