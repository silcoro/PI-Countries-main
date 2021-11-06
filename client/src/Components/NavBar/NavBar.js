import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import { getcountries } from "../../redux/action";
import logo from '../../imagenes/logo.png'




export default function NavBar(){

    const dispatch = useDispatch();

    function inicio_poke(){
        dispatch(getcountries())
    }


    return(
    <div>
        <header className="header-navbar">
            <div>                
                <button className="logo-imagen" onClick={inicio_poke} ><img src={logo} alt="logo" /></button>
            </div>
            
            <nav  className="navbar">
                <ul>
                    <li className='list-item' >
                        <div>
                            <NavLink className="navlink" exact to="/countries" >
                                Home
                            </NavLink>
                        </div>

                        <div>
                            <NavLink className="navlink" exact to="/countries/search" >
                                Buscar Pais
                            </NavLink>
                        </div>

                        <div>
                            <NavLink className="navlink" exact to="/countries/create" >

                                Crear Actividad
                            </NavLink>
                        </div>
                        
                    </li>
                </ul>
            </nav>
        </header>
    </div>
    )
}