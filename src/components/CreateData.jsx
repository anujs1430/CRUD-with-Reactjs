import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const CreateData = () => {

    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();


    const api = 'https://6680fef456c2c76b495d347b.mockapi.io/crud';


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(api, {
            name: name,
            lastName: lname,
            phone: phone,
            email: email,
            password: password
        }).then((res) => {
            console.log(res);
            navigate('/readData');

        }).catch((err) => {
            console.log(err);
        });

    };


    return (
        <form>
            <div className='form-head mt-5'>
                <h3 className='text-center'>User Form</h3>
                <Link className='btn btn-primary' to={'/readData'}>User List</Link>
            </div>
            <div>
                <label className='form-label' htmlFor="name">First Name</label>
                <input className='form-control' autoComplete='on' type="text" placeholder='Name' id='name' onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label className='form-label' htmlFor="lastName">Last Name</label>
                <input className='form-control' autoComplete='on' type="text" placeholder='lastName' id='lastName' onChange={e => setLname(e.target.value)} />
            </div>
            <div>
                <label className='form-label' htmlFor="Phone">Phone</label>
                <input className='form-control' autoComplete='on' type="text" placeholder='Phone Number' id='phone' onChange={e => setPhone(e.target.value)} />
            </div>
            <div>
                <label className='form-label' htmlFor="email">Email</label>
                <input className='form-control' autoComplete='on' type="text" placeholder='Email' id='email' onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label className='form-label' htmlFor="password">Password</label>
                <input className='form-control' autoComplete='on' type="password" placeholder='Password' id='password' onChange={e => setPassword(e.target.value)} />
            </div>
            <div className='mt-5 text-center'>
                <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>

            </div>
        </form>
    )
}

export default CreateData
