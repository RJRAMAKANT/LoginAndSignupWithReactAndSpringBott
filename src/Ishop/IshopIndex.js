import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"; 
import IshopHome from './IshopHome';
import IshopRegister from './IshopRegister';
import IshopLogin from './IshopLogin';
import IshopDashboard from './IshopDashboard';
import FetchngNasaApi from '../FetchingApi';

export default function IshopIndex()
{
    return(
        <div className="container-fluid">
            <header className="bg-danger mt-2 p-2 text-white text-center"><h1>MY ONLINE STORE</h1></header>
            <section className="row" >
             <BrowserRouter>
             <nav className="col-3">
                <div ><Link className="btn btn-danger text-white w-100 " to="/home">HOME</Link></div>
                <div><Link className="btn btn-danger text-white w-100 "  to="/register">REGISTER</Link></div>
                <div><Link className="btn btn-danger text-white w-100 "  to="/login">LOG IN</Link></div>
                <div><Link className="btn btn-danger text-white w-100 "  to="/dashboard">DASHBOARD</Link></div>
              </nav>
              <main className="col-9">
                <div>
                    <Routes>
                    <Route path='/' element={<IshopHome/>}/>
                    </Routes>

                </div>
                <div>
                <Routes>
                    
                    <Route path='/' element={<FetchngNasaApi/>}/>
                
                    <Route path='home'element={<FetchngNasaApi/>}/>
                    <Route path='register' element={<IshopRegister/>} />
                    <Route path='login' element={<IshopLogin/>}/>
                    <Route path='dashboard' element={<IshopDashboard/>}/>
                    <Route path='errorpage'element={
                        <div >
                         <h2 className='text-danger '>INVALID CREDENTIALS</h2>
                         <Link to="/login">Try Again!</Link>
                        </div>
                        
                    }/>
                </Routes>
                </div>
                

              </main>

             </BrowserRouter>
            </section>

        </div>
    )
}