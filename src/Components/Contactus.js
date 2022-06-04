import React from 'react';
import {useNavigate } from 'react-router-dom';

function Contactus() {

    const navigate=useNavigate()
    return ( 
        <div className="container">
            <h1 className='text-center'>Contactus</h1>
            <div className='text-center'>
                <button className="btn btn-danger" onClick={()=>navigate('/users')}>Users</button>
            </div>

            <div className='text-center'>
                <button className="btn btn-primary" onClick={()=>navigate('/sample')}>Sample</button>
            </div>

            <div className="row mt-4">
            <div className="cols col-md-6">
                <img src="https://i.natgeofe.com/n/748f1c42-0d8b-498e-85fd-88151c6f863b/01_organic_farming_i8860_20181003_11260.jpg" alt="" width="100%"/>
            </div>            
            <div className="cols col-md-6 contactblock">
                <h1 className='text-center'>Contact Us</h1>

                <label htmlFor="un">Name</label>
                <input type="text" id='un' className="form-control mb-2"/>

                <label htmlFor="mail">Email</label>
                <input type="email" id='email' className="form-control mb-2"/>

                <label htmlFor="branch">Branch</label>
                <select id="branch" className='form-select' defaultValue={'Andra Pradesh'}>
                    <option value="ts">Telangana</option>
                    <option value="ap">Andra Pradesh</option>
                    <option value="ar">Arunachal Pradesh</option>
                    <option value="as">Assam</option>
                    <option value="kn">karnataka</option>
                    <option value="cn">Chennai</option>
                    <option value="ke">Kerala</option>
                </select>

                <label htmlFor="text" className='mt-2'>Post your Queries</label>
                <textarea id="text" cols="" rows="" className='form-control'></textarea>

                <div className='text-center mt-2'>
                <button type="submit" className='btn btn-success text-center' value="sendMesaage">Submit</button>
                </div>

            </div>
        </div>
        </div>
     );
}

export default Contactus;