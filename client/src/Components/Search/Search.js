import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getcountriesName } from "../../redux/action";
import './Search.css';
// import busqueda from '../../imagenes/buscar1.png';
import buscar2 from '../../imagenes/buscar2.png'


export default function Seacrh(){
    const state = useSelector(state => state.getCountrieName);
    const [input, setInput] = useState("");
    const dispatch = useDispatch();


    function handleChange(e){
        setInput(e.target.value)
    }

    useEffect(() => {
        dispatch(getcountriesName(input))
        
    }, [dispatch,input])

    // function buscar(){
    //     dispatch(getcountriesName(input))
    //     setInput("")
    // }

    return(
        <div className="search-principal" >
            <div className="input">
                <input                        
                    className="input-navbar"
                    type="search" 
                    placeholder="🔎 Ingrese Nombre de Pais Aqui!!"
                    autoComplete="off"
                    onChange={handleChange}
                    value={input}
                />
                {/* <button className="buscar-navbar" onClick={e => buscar(e)} >Buscar Pais</button> */}
            </div>

            {   Array.isArray(state)
                ?(state.map(e=>{
                    return(
                        <div key={e.id} className="id_countrie">
                            <div className="titulo">
                                <Link className="xlink" to={`/countries/details/${e.id}`} >
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
                })
                )
                :<img  src={buscar2} alt="input vacio" height="600px" />
            }

        </div>
        
    )
}