import { useState} from "react";
import { useEffect } from "react";
export default function FetchngNasaApi()
{
    const[mars,setData]=useState([]);
   useEffect(()=>
    {
        fetch("https://fakestoreapi.com/products")
        .then((result)=>
        {
            result.json().then((response)=>
            {
                setData(response)
            })
        })
       
    },[])
    console.warn(mars)

    return(
        <div className="d-flex justify-content-ceneter flex-wrap ">
            {/* <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cname</th>
                        <th>photo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars.map(ddata=>
                        
                            <tr>
                                <td>{ddata.id}</td>
                                <td>{ddata.title}</td>
                                <td><img src={ddata.image} width="100" height="100" alt=""></img></td>
                                
                            </tr>
                        )
                    }
                   
                </tbody>
            </table> */}
           {
            mars.map(ddata=>
                <div className="card">
                    
                    <div className="cardhead"> <img src={ddata.image} width="100" height="100" alt=""></img></div>
                    <div className="middle">{ddata.title}</div>
                   <div className=" bottom"> <button className="text-white btnn">{ddata.price}</button></div>
                 </div>
                )
           }

        </div>
    )
   
}