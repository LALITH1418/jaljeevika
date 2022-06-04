import React from 'react';
import {useForm} from 'react-hook-form';

function Registration() {

    const{register, handleSubmit, formState:{errors}} = useForm()
    
    const onFormSubmit = (userData) => {
        console.log(userData)
    }


    return ( 
        <div className='row'>
            <div className="col-11 col-sm-8 col-md-6 mx-auto">
            <h1>REGISTRATION</h1>
            
            <form onSubmit={handleSubmit(onFormSubmit)}>
                
                {/*username*/}
                <label htmlFor="un">Username</label>
                <input type="text" id='un' className="form-control mb-2" {...register("username", {required:true, minLength:4})}/>
                {/*validation error msg for username*/}
                {errors.username?.type==='required' && <p className='text-danger'>*Username required</p>}
                {errors.username?.type==='minLength' && <p className='text-danger'>*Minimum length should be 4</p>}

                {/*email*/}
                <label htmlFor="email">E-mail</label>
                <input type="email" id='email' className="form-control mb-2" {...register("email", {required:true})}/>
                {/*validation error msg for email*/}
                {errors.email?.type==='required' && <p className='text-danger'>*Enter your e-mail address</p>}

                {/*DOB*/}
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id='dob' className="form-control mb-2" {...register("dob", {required:true})}/>
                {/*validation error msg for date of birth*/}
                {errors.dob?.type==='required' && <p className='text-danger'>*Select date of birth</p>}

                {/*Branch*/}
                <label htmlFor="branch">Branch</label>
                <select id="branch" className='form-select' {...register("branch", {required:true})} defaultValue={'CSE'}>
                    <option value="cse">CSE</option>
                    <option value="it">IT</option>
                    <option value="csbs">CSBS</option>
                </select>
                {/*validation error msg for Branch*/}
                {errors.branch?.type==='required' && <p className='text-danger'>*Select any branch</p>}

                {/*Submit button*/}
                <div className=' text-center m-2'>
                <button type='submit' className='btn btn-success'>Submit</button>
                </div>
            </form>

            </div>
        </div>
     );
}

export default Registration;