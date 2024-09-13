import * as Yup from 'yup'
import { Formik,Form,ErrorMessage,Field } from 'formik'
import axios from 'axios'

const Addstutdent =()=>{
    const values ={
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
    }
    const validationSchema =() =>{
        return Yup.object().shape({
            firstName : Yup.string()
                       .required('First Name is Required')
                       .min(6,'Name should be 6 charecter'),
            lastName : Yup.string()
                      .required('Last Name is Required')
                      .min(1,'lastName should be 1charecter'),
            dateofbirth : Yup.string()
                      .required(' date of birth is Reqired'),
            number : Yup.number()
                     .required('Number is Required'),
                    // .min(9,'Phone Number should be 10 number')
                    // .max(11,' Phone Number dose not  exits 10 number'),
            address : Yup.string()
                    .required('Address is Required')
                    .min(6,'Address should be 6 charecter')
                    .max(50,'Address should not exits 50 charecters'),
            collegeName : Yup.string()
                    .required('College Name is Required')
                    .min(6,'College Name should be 6 charecter'),
            quelification : Yup.string()
                    .required('Quelification is Required')
                    .min(6,'Quelification should be 6 charecter'),                      
            email : Yup.string()
                    .required('Email is Required')
                    .email('Email is invallid'),
            password : Yup.string()
                       .required( 'password is Required')
                      .min(8,'Password  should be 8 charecter'),
            confirmPassword : Yup.string()
                              .required('confirmPassword is Required')
                              .oneOf([Yup.ref('password'),null], 'confirm Passsword should be matched'),
            acceptTerms : Yup.bool().oneOf([true],'accept terms and condition') 
        })
    }
    const handleSumbit = (data) =>{
        console.log(JSON.stringify(data,null,2));
        axios.post('http://localhost:3000/student',{
        firstName : data.firstName,
        lastName : data.lastName,
        dateofbirth:data.dateofbirth,
        number : data.number,
        address :data.address,
        collegeName :data.collegeName,
        quelification :data.quelification,
        email : data.email,
        password : data.password,
        confirmPassword :data.confirmPassword,
            acceptTerms : data.acceptTerms
        })

        .then (response =>response.JSON)
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
                        <Formik initialValues={values}
                        validationSchema = {validationSchema}
                        onSubmit ={handleSumbit}>
                            {({errors,touched,resetForm}) =>(
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="firstName">  First Name</label>
                                        <Field name = 'firstName'
                                        type ='text'
                                        className = {'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}/>
                                        <ErrorMessage name='firstName' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name </label>
                                        <Field name= 'lastName'
                                        type ='text'
                                        className = {'form-control' + (errors.lastName && touched.lastName ? ' is-invalid':'')}/>
                                        <ErrorMessage name='lastName' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dateofbirth">Date Of Birth</label>
                                        <Field name= 'dateofbirth'
                                        type ='date'
                                        className = {'form-control' + (errors.dateofbirth && touched.dateofbirth ? ' is-invalid':'')}/>
                                        <ErrorMessage name='dateofbirth' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number">Phone number</label>
                                        <Field name= 'number'
                                        type ='text'
                                        className = {'form-control' + (errors.number && touched.number ? ' is-invalid':'')}/>
                                        <ErrorMessage name='number' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">address</label>
                                        <Field name= 'address'
                                        type ='text'
                                        className = {'form-control' + (errors.address && touched.address ? ' is-invalid':'')}/>
                                        <ErrorMessage name='address' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="collegeName">College Name</label>
                                        <Field name= 'collegeName'
                                        type ='text'
                                        className = {'form-control' + (errors.collegeName && touched.collegeName ? ' is-invalid':'')}/>
                                        <ErrorMessage name='collegeName' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="uquelificationser">quelification</label>
                                        <Field name= 'quelification'
                                        type ='text'
                                        className = {'form-control' + (errors.quelification && touched.quelification ? ' is-invalid':'')}/>
                                        <ErrorMessage name='quelification' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field name= 'email'
                                        type ='text'
                                        className = {'form-control' + (errors.email && touched.email ? ' is-invalid':'')}/>
                                        <ErrorMessage name='email' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field name= 'password'
                                        type ='password'
                                        className = {'form-control' + (errors.password && touched.password ? ' is-invalid':'')}/>
                                        <ErrorMessage name='password' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <Field name= 'confirmPassword'
                                        type ='password'
                                        className = {'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid':'')}/>
                                        <ErrorMessage name='confirmPassword' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                    <Field name= 'acceptTerms'
                                        type ='checkbox'
                                        className = {'form-check-input' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid':'')}/>
                                        <label htmlFor="acceptTerms" className='form-check-label'>
                                            I have read the all terms and condition</label>
                                        <ErrorMessage name='acceptTerms' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <button type ='sumbit' className='custom-btn btn-3'>
                                            <span>Register</span>
                        
                                            </button>
                                        <button type ='button' onClick={resetForm} className='btn btn-warning'>
                                            Reset
                                            </button>
                                    </div>
                                </Form>
                            )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Addstutdent;