
import { useCookies } from "react-cookie";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function()
{
    const[cookies,setcookies,removeCookie]=useCookies();
    const[userid,setuserid]=useState();
    let navigate=useNavigate();

    useEffect(()=>
    {
        setuserid(cookies["mailid"]);
    })
    function handleclick()
    {
        removeCookie("mailid");
        navigate("/home");

    }
    return(
        <div>
            <h1 className="text-danger">USER DASHBOARD</h1>
            <h3 className="text-success">WELCOME USER : {userid}</h3>
            <button className="btn-btn-danger m-3" onClick={handleclick}>Signout</button>
        </div>
    )
}