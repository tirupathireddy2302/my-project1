import { Formik,Form,Field } from 'formik'
import axios from 'axios'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';

const Editstudents =()=>{
    const {id} =useParams();
    const [values,setValues] = useState({
        firstName : '',
        lastName : '',
        dateofbirth:'',
        number : '',
        address :'',
        collegeName :'',
        quelification :'',
        email : '',
        password : '',
        confirmPassword :'',
        acceptTerms : false
    }) 
    const { firstName ,lastName ,dateofbirth,number ,address ,collegeName ,quelification , email,
    password ,confirmPassword } = values;
  const onInputChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value }
        );
  };
    useEffect (()=>{
        if(id) {
        loadPost(id);
        }
    },[id])
    const handleSumbit = (data) => {
        console.log(JSON.stringify(data,null,2));
        axios.put(`http://localhost:3000/student/${id}`,values)
        .then (response =>console.log(response))      
    }
    const loadPost = async id =>{
        const result = await axios.get(`http://localhost:3000/student/${id}`);
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
                    <div className="registatoin-form">
                        <Formik
                        onSubmit ={handleSumbit}>
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="firstName">  First Name</label>
                                        <Field name = 'firstName'
                                        type ='text'
                                        value={firstName}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control' }/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name </label>
                                        <Field name= 'lastName'
                                        type ='text'
                                        value={lastName}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dateofbirth">Date Of Birth</label>
                                        <Field name= 'dateofbirth'
                                        type ='date'
                                        value={dateofbirth}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number">Phone number</label>
                                        <Field name= 'number'
                                        type ='text'
                                        value={number}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">address</label>
                                        <Field name= 'address'
                                        type ='text'
                                        value={address}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="collegeName">College Name</label>
                                        <Field name= 'collegeName'
                                        type ='text'
                                        value={collegeName}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="uquelificationser">quelification</label>
                                        <Field name= 'quelification'
                                        type ='text'
                                        value={quelification}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
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
export default Editstudents;