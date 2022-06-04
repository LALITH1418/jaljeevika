import {Routes, Route, NavLink, Navigate} from 'react-router-dom';
import Home from './Components/Home'; 
import Users from './Components/Users';
import Contactus from './Components/Contactus';
import Technologies from './Components/Technologies';
import Html from './Components/Html';
import Javascript from './Components/Javascript';
import Register from './Components/Registration';
import Sample from './Components/Sample';
import Email from './Components/Email';


function App() {
  return (
    <div className="App">

  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="">Home</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="users">Users</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="register">Register</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="technologies">Technologies</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="email">Email</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="Contactus">Contact us</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>



      
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/users' element={<Users/>}/>

        <Route path='/register' element={<Register/>}/>

        <Route path='/technologies' element={<Technologies/>}>
          <Route path='' element={<Html/>}/>
          <Route path='' element={<Navigate replace to="html"/>}/>
          <Route path='javascript' element={<Javascript/>}/>
        </Route>

        <Route path='/sample' element={<Sample/>}/>

        <Route path='/email' element={<Email/>}/>

        <Route path='/Contactus' element={<Contactus/>}/>    
      </Routes>
    
    </div>
  );
}

export default App;
