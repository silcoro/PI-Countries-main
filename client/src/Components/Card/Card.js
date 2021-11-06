import React from "react";
import { Link } from "react-router-dom";
import './Card.css'


export default function Card({countries}){
    return(     
            countries.length
            ?(countries.map(e=>{
                return(
                    <div key={e.id} className="id_countrie">
                        <div className="titulo">
                            <Link className="xLink" to={`/countries/details/${e.id}`} >
                                <h2>{e.name}</h2>
                            </Link>
                            
                        </div>
                        <img className="imagen-card" src={e.flags} alt={e.name} />
                        <div>
                            <h3 id="con">Continente</h3>
                            <h2 id="con-h2">{e.continents}</h2>
                        </div>
                    </div>
                )
            }))
            :<span>Cargando...</span>
    )
}