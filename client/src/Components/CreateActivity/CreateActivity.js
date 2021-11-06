import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './CreateActivity.css';
import { create_activity,getcountries } from "../../redux/action";
import { useHistory } from "react-router";

export default function CreateActivity(){

    const getcountries_create = useSelector(state => state.getcountries)
    const orderAlfa = getcountries_create.sort((a,b)=> a.name.localeCompare(b.name))
    const dispatch = useDispatch()
    const history = useHistory()

    const [values, setValues] = useState({
        name:"",
        dificulty:"",
        duration:"",
        season:"",
        countries:[]
    })

    function onSubmit(e){
        e.preventDefault()
        dispatch(create_activity(values));
        history.push("/countries")
        
    }

    function handleOnChange(e){
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
        
    }


    const handleCountriesSelection = (e) => {
        if (values.countries.includes(e.target.value)) {
            let countriesSelected = values.countries.filter(c => c !== e.target.value)
            setValues({
                ...values,
                countries: countriesSelected
            })
        } else {
            setValues({
                ...values,
                countries: [...values.countries, e.target.value]
            })
        }
    };

    useEffect(() => {
        dispatch(getcountries())
    }, [dispatch])

    let titulo =`Es obligatorio seleccinar un pais,
    hacer click y selecciona varios paises,
    igual para sacar a un pais hacer click`
    return(
            <div className="formulario-container">
                <form className="formulario" onSubmit={onSubmit} >
                    <div  className="formulario-activity">
                        <label className="titulos" >Name</label>
                        <input
                        required
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Name"
                        onChange={handleOnChange}
                        >
                        </input>

                        <label className="titulos" >Dificulty</label>
                        <select required name="dificulty" value={values.dificulty} onChange={handleOnChange} className="dificulty" >
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <label className="titulos" >Duration</label>
                        <input
                        required
                        type="text"
                        name="duration"
                        value={values.duration}
                        placeholder="duration"
                        onChange={handleOnChange}
                        >
                        </input>

                        <label className="titulos" >Season</label>
                        <select required name="season" value={values.season} onChange={handleOnChange} className="season" >
                            <option></option>
                            <option value="Otoño">Otoño</option>
                            <option value="Invierno">Invierno</option>
                            <option value="Verano">Verano</option>
                            <option value="Primavera">Primavera</option>
                        </select>
                    </div>
                    <div  className="formulario-countries" >
                        <label className="titulos" >Seleccione 1 o más Países</label>
                        <select required title={titulo}  multiple name="countries" onChange={handleCountriesSelection} value={values.countries} className="select-map" >
                            { 
                                orderAlfa.map(e => {
                                    return(
                                        <option key={e.id} value={e.name}>{e.name}</option>
                                    )
                                })
                            }
                        </select>
                        <p>Países Agregados a la Actividad</p>
                        <label className="cuadro-paises">
                            
                        {values.countries.map(c=>(
                            <div key={c}>{c}</div>
                        ))}
                        </label>
                        

                    </div>

                    <button type="submit" className="boton" >Guardar</button>

                </form>
            </div>
    )
}