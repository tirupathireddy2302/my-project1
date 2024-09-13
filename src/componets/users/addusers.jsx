import * as Yup from 'yup'
import { Formik,Form,ErrorMessage,Field } from 'formik'
import axios from 'axios'

const Addusers = () =>{
    const initialValues ={
        fullName : '',
        userName : '',
        number : '',
        email : '',
        password : '',
        confirmPassword :'',
        acceptTerms : false
    }
    const validationSchema =() =>{
        return Yup.object().shape({
            fullName : Yup.string()
                       .required('Full Name is Required')
                       .min(6,'Name should be 6 charecter')
                       .max(20,'Name should not exits 13 charecters'),
            userName : Yup.string()
                      .required('User Name is Required')
                      .min(6,'User Name should be 6 charecter')
                      .max(30,'User Name should not exits 13 charecters'),
            number : Yup.string()
                      .required('Number is Required')
                      .min(10,'Phone Number should be 10 number')
                       .max(10,' Phone Number dose not  exits 10 number'),
            email : Yup.string()
                    .required('Email is Required')
                    .email('Email is invallid'),
            password : Yup.string()
                       .required('password is Required')
                      .min(8,'Password  should be 8 charecter'),
            confirmPassword : Yup.string()
                              .required('confirmPassword is Required')
                              .oneOf([Yup.ref('password'),null], 'confirm Passsword should be matched'),
            acceptTerms : Yup.bool().oneOf([true],'accept terms and condition') 
        })
    }
    const handleSumbit = (data) =>{
        console.log(JSON.stringify(data,null,2));
        axios.post('https://roomexpesive-default-rtdb.firebaseio.com/userData.json',{ 
            fullName : data.fullName,
            userName : data.userName,
            number : data.number,
            email : data.email,
            password : data.password,
            confirmPassword :data.confirmPassword,
            acceptTerms : data.acceptTerms
        })

        .then (response =>console.log(response))
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
                        <Formik initialValues = {initialValues}
                        validationSchema = {validationSchema}
                        onSubmit ={handleSumbit}>
                            {({errors,touched,resetForm}) =>(
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>
                                        <Field name = 'fullName'
                                        type ='text'
                                        className = {'form-control' + (errors.fullName && touched.fullName ? ' is-invalid' : '')}/>
                                        <ErrorMessage name='fullName' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userName">User Name</label>
                                        <Field name= 'userName'
                                        type ='text'
                                        className = {'form-control' + (errors.userName && touched.userName ? ' is-invalid': '')}/>
                                        <ErrorMessage name='userName' component={'div'}
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
                                        <button type ='sumbit' className='custom-btn btn-12'><span>Click</span>
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
export default Addusers