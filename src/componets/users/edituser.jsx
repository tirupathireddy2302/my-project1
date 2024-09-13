import { Formik,Form,Field } from 'formik'
import axios from 'axios'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';

const Editusers =()=>{
    const {id} =useParams();
    const [values,setValues] = useState({
        fullName : '',
        userName : '',
        number : '',
        email : '',
        password : '',
        confirmPassword :'',
        acceptTerms : false
    })
    const { fullName,userName,number,email,password,confirmPassword } = values;
  const onInputChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value }
        );
  };
    useEffect (()=>{
        if(id) {
        loadUsers(id);
        }
    },[id])
    const handleSumbit = (data) => {
        console.log(JSON.stringify(data,null,2));
        axios.put(`http://localhost:3000/users/${id}`,values)
        .then (response =>console.log(response))      
    }
    const loadUsers = async id =>{
        const result = await axios.get(`http://localhost:3000/users/${id}`);
    setValues(result.data);
    }
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1>Tirupathi</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="register-form">
                        <Formik 
                        onSubmit ={handleSumbit}>
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <Field name = 'fullName'
                                        type ='text'
                                        value={fullName}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userName">User Name</label>
                                        <Field name= 'userName'
                                        type ='text'
                                        value={userName}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number">Phone number</label>
                                        <Field name= 'number'
                                        type ='text'
                                        value={number}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control' }/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field name= 'email'
                                        type ='text'
                                        value={email}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field name= 'password'
                                        type ='password'
                                        value={password}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <Field name= 'confirmPassword'
                                        type ='password'
                                        value={confirmPassword}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <button type ='sumbit' className='btn btn-primary'>
                                            Update
                                            </button>
                                    </div>
                                </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Editusers;