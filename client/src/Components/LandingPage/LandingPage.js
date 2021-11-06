import React from "react";
import './LandingPage.css';
import imagen from '../../imagenes/mapa_negro.svg';
import { NavLink } from "react-router-dom";


export default function LandingPage(){
    return(
        <div className="container-LandingPage">
            <img
            className="principal"
            src={imagen}
            alt="pama_mundi_azul"
            
            />
            <NavLink to="/countries" >
                <button className="button-landingPage">
                📌
                </button>
                <div className="mapagif">
                
                </div>
            </NavLink>
            
        </div>

    )
}