import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
export default function IshopLogin()
{
    let navigate=useNavigate();
    const[user,setuser]=useState([]);
    const[cookies,setCookie,removeCookie]=useCookies();
    const formik=useFormik(
        {
            initialValues:{
                mailId:'',
                password:''
            },
            onSubmit:values=>{
                for(var userdata of user)
                {
                    if(userdata.mailId==values.mailId && userdata.password==values.password)
                    {
                        setCookie("mailid",values.mailId);
                        navigate("/dashboard");
                        break;
                    }
                    else
                    {
                        navigate("/errorpage");
                    }
                }
            
            }
        }
    ) 
    useEffect(()=>{
        axios.get("http://localhost:8384/user/form/alluser")
        .then(response=>{
            setuser(response.data);
        })
    })   
    

    return(
        <div>
            <h1 className="text-danger ">USER LOGIN</h1>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>EMAIL</dt>
                    <dd><input type="text" className="form-control w-50"value={formik.values.mailId} onChange={formik.handleChange} name="mailId"></input></dd>
                    <dt>PASSWORD</dt>
                    <dd><input type="password" className="form-control w-50" value={formik.values.password} onChange={formik.handleChange} name="password"></input></dd>
                </dl>
                <div><button type="submit" className="btn btn-danger w-50 m-1 form-control">LOG IN</button></div>
            </form>
            <Link to="/register">Do not Have account ? Signup</Link>
        </div>
    )
}