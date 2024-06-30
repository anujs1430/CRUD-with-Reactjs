import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md';

const ReadData = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);


    const navigate = useNavigate();


    const api = 'https://6680fef456c2c76b495d347b.mockapi.io/crud';


    useEffect(() => {
        axios.get(api).then((res) => {
            setData(res.data);
            setLoader(false);
        }).catch((err) => {
            console.log(err);
        });
    }, []);


    const handleDelete = (id) => {
        setLoader(true);
        axios.delete(`https://6680fef456c2c76b495d347b.mockapi.io/crud/${id}`).then((res) => {
            setData(data.filter(item => item.id !== id));
            setLoader(false);
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

    }


    if (data.length < 1) {
        // 
        <h5>No Data Found...</h5>
    }


    const handlerEdit = (id, firstname, lastname, phone, email, password) => {
        localStorage.setItem("id", id);
        localStorage.setItem("First Name", firstname);
        localStorage.setItem("Last Name", lastname);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        // console.log(firstname, lastname);
    }


    let a = 1;


    return (
        <div className="container data mt-5">
            <div className='form-head'>
                <h3>User List</h3>
                <Link to={'/'} className='btn btn-warning'>Add More Users</Link>
            </div>
            {
                loader ? <Loader /> : data.length == 0 ? <h6 className='no-data'>No Data Found...</h6> :
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((i) => (
                                    <tr key={i.id}>
                                        <th scope="row">{a++}</th>
                                        <td>{i.name}</td>
                                        <td>{i.lastName}</td>
                                        <td>{i.phone}</td>
                                        <td>{i.email}</td>
                                        <td>{i.password}</td>
                                        <td>
                                            <Link to={'/editData'}>
                                                <button className='bg-transparent border-0' onClick={() => handlerEdit(i.id, i.name, i.lastName, i.phone, i.email,
                                                    i.password)}><MdEdit className='bg-transparent text-success' /></button>
                                            </Link>

                                            <button className='bg-transparent border-0' onClick={() => handleDelete(i.id)}><MdDelete className='bg-transparent text-danger' />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
            }
        </div>

    )
}

export default ReadData
