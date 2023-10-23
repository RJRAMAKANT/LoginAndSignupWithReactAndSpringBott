import { Link } from "react-router-dom"
export default function IshopHome()
{
    return(
        <div>
            <h2>HOME</h2>
            <Link to="/register" >NEW uSER? REGISTER</Link>
            <span>|</span>
            <Link to="/login">Existing User ? Log in</Link>
        </div>
    )
}