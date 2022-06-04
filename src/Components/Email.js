import React from 'react';
import emailjs from 'emailjs-com';

function Email() {

    function sendMail(e){
        
        e.preventDefault();
        emailjs.sendForm('service_mpjku9b', 'template_4pc5drq', e.target,'Ok9NKWIQv12MLyaO8o')
        .then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }

    return ( 
        <div className='container'>
            <h1>FORM</h1>
            <form onSubmit={sendMail}>
                
                <label htmlFor="un">Username</label>
                <input type="text" name="name" id="un" className='form-control w-60'/>

                <label htmlFor="mail">E-mail</label>
                <input type="email" name='mail' id="mail" className='form-control w-60' />

                <label>Message</label>
                <textarea rows="" name='message ' className='form-control'></textarea>

                <button type="submit" value="send" className='btn btn-success mt-2'>SEND</button>
            </form>
        </div>
     );
}

export default Email;