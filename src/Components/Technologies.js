import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

function Technologies() {
    return ( 
        <div>
            <h1>Technologies</h1>

            <ul class="nav">
  <li className="nav-item">
    <NavLink className="nav-link" to=''>HTML</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to='javascript'>JS</NavLink>
  </li>

            </ul>
            <Outlet/>
        </div>
     );
}

export default Technologies;