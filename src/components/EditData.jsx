import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditData = () => {

    const navigate = useNavigate();


    const api = 'https://6680fef456c2c76b495d347b.mockapi.io/crud';


    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('First Name'));
        setLname(localStorage.getItem('Last Name'));
        setPhone(localStorage.getItem('phone'));
        setEmail(localStorage.getItem('email'));
        setPassword(localStorage.getItem('password'));
    }, [])


    const EditSubmit = (e) => {
        e.preventDefault();
        axios.put(`${api}/${id}`, {
            name: name,
            lastName: lname,
            phone: phone,
            email: email,
            password: password
        }).then(() => {
            navigate('/readData');
        })


    }

    return (
        <form>
            <div className='form-head mt-5'>
                <h3 className='text-center'>Edit User Info</h3>
            </div>
            <div>
                <label className='form-label' htmlFor="name">First Name</label>
                <input className='form-control' autoComplete='on' type="text" placeholder='Name' id='name' onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div>
                <label className='form-label' htmlFor="lastName">Last Name</label>
                <input className='form-control' autoComplete='on' type="text" placeholder='lastName' id='lastName' onChange={(e) => setLname(e.target.value)} value={lname} />
            </div>
            <div>
                <label className='form-label' htmlFor="Phone">Phone</label>
                <input className='form-control' autoComplete='on' type="text" placeholder='Phone Number' id='phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
            </div>
            <div>
                <label className='form-label' htmlFor="email">Email</label>
                <input className='form-control' autoComplete='on' type="text" placeholder='Email' id='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div>
                <label className='form-label' htmlFor="password">Password</label>
                <input className='form-control' autoComplete='on' type="password" placeholder='Password' id='password' onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className='mt-5 text-center'>
                <button className='btn btn-primary' onClick={EditSubmit}>Submit</button>

            </div>
        </form>
    )
}

export default EditData
