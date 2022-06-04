import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';

function Users() {

    let[users,setUsers] = useState([])

    useEffect(()=>{
        
        // axios.get("https://jsonplaceholder.typicode.com/users")
        // .then(res=>setUsers(res.data))
        // .catch(err=>console.log(err))
        
        let fetachData = async()=>{
        let res=await axios.get("https://jsonplaceholder.typicode.com/users")
        let usersData = res.data
        setUsers(usersData)
        }
        fetachData()
    },[])


    return ( 
        <div className='container'>
            <h1>Users</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((userObj) => <tr key={userObj.id}>
                            <td>{userObj.id}</td>
                            <td>{userObj.name}</td>
                            <td>{userObj.email}</td>
                            <td>{userObj.website}</td>
                        </tr>)
                            
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Users;