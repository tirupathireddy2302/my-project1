import * as Yup from 'yup'
import { Formik,Form,ErrorMessage,Field } from 'formik'
import axios from 'axios'

const Addpost =()=>{
    const values ={
        Name : '',
        title : '',
        body : '',
        acceptTerms : false
    }
    const validationSchema =() =>{
        return Yup.object().shape({
            Name : Yup.string()
                       .required('Full Name is Required')
                       .min(6,'Name should be 6 charecter'),
            title : Yup.string()
                      .required('Tilte is Required')
                      .min(6,'title should be 6 charecter'),
            body : Yup.string()
                     .required('Body is Required')
                    .min(10,'body should be 10 charecters')
                    .max(100,'body donot exits 100 charecters'),
            acceptTerms : Yup.bool().oneOf([true],'accept terms and condition') 
        })
    }
    const handleSumbit = (data) => {
        console.log(JSON.stringify(data,null,2));
        axios.post('http://localhost:3000/posts',{
            Name : data.Name,
            title : data.title,
            body : data.body,
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
                    <div className="registatoin-form">
                        <Formik initialValues= {values}
                        validationSchema ={validationSchema}
                        onSubmit ={handleSumbit}>
                            {({errors,touched,resetForm}) =>(
                                <Form>
                                    <div className="inputBox">
                                        <label htmlFor="Name"> Name</label>
                                        <Field name = 'Name'
                                        type ='text'
                                        className = {'form-control' + (errors.title && touched.title ? ' is-invalid':'')}/>
                                        <ErrorMessage name='Name' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="title">title</label>
                                        <Field name= 'title'
                                        type ='text'
                                        className = {'form-control' + (errors.title && touched.title ? ' is-invalid':'')}/>
                                        <ErrorMessage name='title' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="body">body</label>
                                        <Field name= 'body'
                                        type ='text'
                                        className = {'form-control' + (errors.body && touched.body ? ' is-invalid':'')}/>
                                        <ErrorMessage name='body' component={'div'}
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
                                        <button className ="submitBtn" type ='sumbit'>
                                            Register
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
export default Addpost;