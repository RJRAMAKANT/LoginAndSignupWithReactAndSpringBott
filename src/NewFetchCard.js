import { useEffect, useState} from "react";

export default function NewFetchCard()
{
    const[productcat,setData]=useState([]);
    const[allproduct,setAllProduct]=useState([]);
    function FetchCatagorie()
    {
        fetch('https://fakestoreapi.com/products/categories').then((response)=>
        {
            response.json().then((result)=>
            {
                result.unshift('all');
                setData(result);
            })
        })
    }
    function allproduct1(url)
    {
        fetch(url).then((result)=>
        {
            result.json().then((response)=>
            {
                setAllProduct(response);
            })
        })

    }
    function getcatagoridata(e)
    {
      if(e.target.value==='all')
      {
        allproduct1(`https://fakestoreapi.com/products`);
      }
      else{
        //alert(e.target.value);
        allproduct1(`https://fakestoreapi.com/products/category/${e.target.value}`);
      }
    }
    useEffect(()=>
    {
      FetchCatagorie();
      allproduct1('https://fakestoreapi.com/products');
    },[])
    return(
        <div className="roww">
          
                <div >
                <select onChange={getcatagoridata}> {
                        productcat.map(catadata=>
                        
                           
                                <option value={catadata} key={catadata}>{catadata}</option>
                            
                        )
                    }
                    </select>

                </div>
                <div className="allproductcard">
                   {
                    allproduct.map(allp=>
                    
                        <div className="cardd" key={allp.id}>
                        <img src={allp.image} width="100" height="100" alt="sgsh"></img>
                        <h6>{allp.title}</h6>
                        <h6>{allp.price}</h6>
                        <h6>{allp.category}</h6>
                        <h6>{allp.rating.rate}</h6>
                        <button className="btn" >ADD TO CART</button>
                        </div>
                    )
                   }


                </div>
           

        </div>
    )
}