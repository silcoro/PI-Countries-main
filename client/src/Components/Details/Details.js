import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countrieById } from "../../redux/action";
import './Details.css';


export default function Details({id}){

    const dispatch = useDispatch();
    const obj = useSelector(state=> state.countrie_id)

    useEffect(() => {
        
        dispatch(countrieById(id))
        // return () => {
        //     cleanup
        // }
    }, [dispatch,id])


    return (
        <div className="container">
            {
                obj.length !== 0 || obj.length !== undefined
                ?(<div className="caja_principal" key={obj.id}>
                    <img  className="imagen" src={obj.flags} alt={obj.name} />
                        <h3 className="nombre">{obj.name}</h3>
                        <div className="parrafos">
                            <p className="id_details">Codigo: {obj.id}</p>
                            <p>Continente: {obj.continents}</p>
                            <p>Capital: {obj.capital}</p>
                            <p>SubRegion: {obj.subregion}</p>
                            <p>Area: {obj.area}.km2</p>
                            <p>Poblacion: {obj.population}</p>
                        </div>
                    <div>
                    <p>Actividades:</p>
                    <table className="tabla-dinamica">
                        <thead >
                            <tr className="thead">
                                <th>Nombre</th>
                                <th>Dificultad</th>
                                <th>Duración</th>
                                <th>Estacion</th>
                            </tr>
                        </thead>
                        <tbody >
                            
                            {   (obj.activities?.length)?(obj.activities.map(e=>{
                            return(
                                <tr className="tbody" key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.dificulty}</td>
                                    <td>{e.duration}</td>
                                    <td>{e.season}</td>
                                </tr>
                                
                            )
                        })):(<tr><td>No</td><td>hay</td><td>Actividades</td>
                            <td>Registradas</td></tr>)
                    }
                            
                        </tbody>
                    </table>
                </div>
                </div>)
                :<span>cargando detalles...</span>
            }
        </div>
    )
}