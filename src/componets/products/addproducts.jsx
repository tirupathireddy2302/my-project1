import * as Yup from 'yup'
import { Formik,Form,ErrorMessage,Field } from 'formik'
import axios from 'axios'

const Addproducts =()=>{
    const values ={
        productId : '',
        productName : '',
        price : '',
        quelity : '',
        acceptTerms : false
    }
    const validationSchema =() =>{
        return Yup.object().shape({
            productId: Yup.number()
                       .required('Product id is Required')
                       .min(1,'produtid should be 1 number'),
            productName : Yup.string()
                      .required('product Name is Required')
                      .min(1,'productName should be 1 charecter')
                      .max(13,'productName should not exits 13 charecters'),
            price : Yup.number()
                     .required('Price is Required')
                     .min(1,'produtid should be 1 number'),
            quelity : Yup.number()
                    .required('Qulity is Required')
                    .min(1,'produtid should be 1 number'),
            acceptTerms : Yup.bool().oneOf([true],'accept terms and condition') 
        })
    }
    const handleSumbit = (data) =>{
        console.log(JSON.stringify(data,null,2));
        axios.post('http://localhost:3000/products',{
            productId : data.productId,
            productName : data.productName,
            price : data.price,
            quelity :data.quelity,
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
                        <Formik initialValues= {values}
                        validationSchema = {validationSchema}
                        onSubmit ={handleSumbit}>
                            {({errors,touched,resetForm}) =>(
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="productId">Product Id</label>
                                        <Field name = 'productId'
                                        type ='text'
                                        className = {'form-control' + (errors.productId && touched.productId ? ' is-invalid':'')}/>
                                        <ErrorMessage name='productId' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productName">Product Name</label>
                                        <Field name= 'productName'
                                        type ='text'
                                        className = {'form-control' + (errors.productName && touched.productName ? ' is-invalid':'')}/>
                                        <ErrorMessage name='productName' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Phone  price</label>
                                        <Field name= 'price'
                                        type ='text'
                                        className = {'form-control' + (errors.price && touched.price ? ' is-invalid':'')}/>
                                        <ErrorMessage name='price' component={'div'}
                                        className ="invalid-feedback"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="quelity">  quelity</label>
                                        <Field name= 'quelity'
                                        type ='text'
                                        className = {'form-control' + (errors.quelity && touched.quelity ? ' is-invalid':'')}/>
                                        <ErrorMessage name ='quelity' component={'div'}
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
                                        <button type ='sumbit' className="custom-btn btn-9">
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
export default Addproducts;