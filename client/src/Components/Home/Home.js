import React,{ useEffect,useState } from "react";
import './Home.css';
import { useSelector,useDispatch } from 'react-redux'
// import { getcountries } from "../../redux/action";
import Card from "../Card/Card";
import Order from "../Order/Order";
import Filters from "../Filters/Filters";



export default function Home(){
    const get_countrie = useSelector(state => state.getcountries);//todos mis countries
    // const dispatch = useDispatch();
    const numberPage =[];

/*******************************paginate************************** */
    const [page, setPage] = useState(1);
    const countriXpage =10;//cantidad de ciudades por paginas
    const indexUltimo = page*countriXpage;//marcar el final de mi extracion en mi slice 
    const indexInicio = indexUltimo - countriXpage;//inicio de mi extracion en mi slice 
    const slicecountri = get_countrie.slice(indexInicio, indexUltimo);// slice a mi BD
    /**-----------inicio conteo paginas-------------------------- */
        let paginas = Math.ceil(get_countrie.length/countriXpage);
        for (let i = 1; i <= paginas; i++) {
            numberPage.push(i)//guardo mis paginas
        }
    /**----------fin conteo paginas-------------------------*/

    function pagination(e){
        if (e.target.value==="next") {
            setPage(page+1)
        } else if(e.target.value==="inicio"){
            setPage(1)
        }else if(e.target.value ==="final"){
            setPage(numberPage.length)
        }else {
            setPage(page-1)
        }
    }
    /****************************extra *********************/
   
    return (
        <div className="home-principal">
                <div className="order-filter">
                    <Filters/>
                    <Order/>
                </div>               
                <Card countries={slicecountri?slicecountri:get_countrie}/>
{/********* paginate*************************************************** */}       
            <div className="pagination-container" >
                <button onClick={pagination} value="inicio" >⏪</button>
                <button onClick={pagination} value="previous" disabled={page===1} >◀️</button>
                    {  
                        numberPage.map((pag,index)=>{//viene de mi useeffect mi array de paginas
                            return(
                                <div
                                    key={index}
                                    onClick={()=> setPage(pag)}//establezco mi pagina
                                    className={page === pag ?'active':''}// me activa mi pagina
                                >
                                {pag}
                            </div>
                            )
                        })
                    }
                <button onClick={pagination} value="next" disabled={page===numberPage.length}>▶️</button>
                <button onClick={pagination} value="final" >⏩</button>
            </div>
{/* **********End Paginate*************************************** */}
        </div>
    )

}


// let[arrayboton,setArrayboton]= useState([]);//guardo temporalmente mis paginas

// useEffect(()=>{
//             let numePageTempo = [...numberPage]
//     console.log(`numePageTempo`, numePageTempo.length)

//         if (page>=1 && page<=8) {
//             numePageTempo = [1,2,3,4,5,6,7,8,9,10]
//         } else if(page>8 && page<=(Math.ceil(numberPage.length/2)+3)){//render entre 8y 16
//             let sliced = numberPage.slice(7,Math.ceil(numberPage.length/2)+4);// 7 - 17
//             numePageTempo = [...sliced]
//         } else if(page>(Math.ceil(numberPage.length/2)+3)){// mayor a 16
//             let sliced1 = numberPage.slice((Math.ceil(numberPage.length/2)+2),numberPage.length)
//             numePageTempo = [...sliced1]
//         }
//         setArrayboton(numePageTempo)    
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// },[page])
// /***************************End Paginate *************************************/
// // useEffect(() => {
// //     dispatch(getcountries());
// // }, [dispatch])


