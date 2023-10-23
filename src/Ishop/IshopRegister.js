import { Form, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function IshopRegister()
{
    let navigate=useNavigate();
    const formik=useFormik(
        {
            initialValues:{
                mailId:'',
                firstName:'',
                lastName:'',
                password:'',
                phoneNumber:'',
                address:'',
                pincode:'',
            },
            onSubmit:values=>{
                axios.post("http://localhost:8384/user/form/register",values);
                alert("Register Successful");
                navigate("/login");
            }
        }
    )
    return(
        <div className="container-fluid">
            <h1 className="text-danger m-2 text-bold">USER REGISTRATION</h1>
            <form onSubmit={formik.handleSubmit} >
                <dl>
                    <dt>EMAIL</dt>
                    <dd><input type="text" className="w-50" value={formik.values.mailId} onChange={formik.handleChange} name="mailId"></input></dd>
                    <dt>firstName</dt>
                    <dd><input type="text" className="w-50" value={formik.values.firstName}onChange={formik.handleChange} name="firstName"></input></dd>
                    <dt>lastName</dt>
                    <dd><input type="text" className="w-50" value={formik.values.lastName}onChange={formik.handleChange} name="lastName"></input></dd>
                    <dt>password</dt>
                    <dd><input type="password" className="w-50" value={formik.values.password}onChange={formik.handleChange} name="password"></input></dd>
                    <dt>phoneNumber</dt>
                    <dd><input type="text" className="w-50" value={formik.values.phoneNumber} onChange={formik.handleChange} name="phoneNumber"></input></dd>
                    <dt>Address</dt>
                    <dd><input type="text" className="w-50" value={formik.values.address} onChange={formik.handleChange} name="address"></input></dd>
                    <dt>pincode</dt>
                    <dd><input type="number" className="w-50" value={formik.values.pincode} onChange={formik.handleChange} name="pincode"></input></dd>
                </dl>
                <button className=" btn btn-danger w-50 m-1" type="submit">Sign up</button>
                <br/>
                <Link to="/login">alredy have an account?Log in</Link>

            </form>
        </div>
       
        
    )
}