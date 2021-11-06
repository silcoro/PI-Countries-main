import React from "react";
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router";
import { sortAscCountrie, sortDescCountrie,populationAscCountrie,populationDescCountrie } from "../../redux/action";

export default function Order(){

    let dispatch = useDispatch()
    let history = useHistory()
    function handleChange(e){ /***funcion manejo cambio Ordenar */
        if (e.target.value==="asc") {
            dispatch(sortAscCountrie("asc"))//order ascendente alfabeticamente
            history.push("/countries")
        } else if(e.target.value==="desc"){
            dispatch(sortDescCountrie("desc"));//order descendente alfabeticamente
            history.push("/countries")
        } else if(e.target.value==="poblacion"){
            dispatch(populationAscCountrie("poblacion"));//order fuerza ascendente
            history.push("/countries")
        } else if(e.target.value==="poblacionDesc"){
            dispatch(populationDescCountrie("poblacionDesc"));//order fuerza descendente
            history.push("/countries")
        } 
    }

    return(
        <div className="border-caja">
            <p className="titulo-caja">Order Asc | Desc </p>
            <select className="select-home" defaultValue={'default'} onChange={e => handleChange(e)}>
                <option value="default" disabled> ↕️ Asc | Desc</option>
                <option value="asc">Alfabetico Asc 🔼</option>
                <option value="desc" >Alfabetico Desc 🔽</option>
                <option value="poblacion" >Poblacion Asc ⬆️</option>
                <option value="poblacionDesc" >Poblacion Desc ⬇️</option>
            </select>
        </div>
    )
}