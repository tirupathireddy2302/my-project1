import { Formik,Form,Field } from 'formik'
import axios from 'axios'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';

const EditProduct =()=>{
    const {id} =useParams();
    const [values,setValues] = useState({
        productId : '',
        productName : '',
        price : '',
        quelity : '',
        acceptTerms : false
    })
    const { productId,productName, price ,quelity } = values;
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
        axios.put(`http://localhost:3000/products/${id}`,values)
        .then (response =>console.log(response))      
    }
    const loadPost = async id =>{
        const result = await axios.get(`http://localhost:3000/products/${id}`);
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
                                        <label htmlFor="productId">Product Id</label>
                                        <Field name = 'productId'
                                        type ='text'
                                        value={productId}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productName">Product Name</label>
                                        <Field name= 'productName'
                                        type ='text'
                                        value={productName}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Phone  price</label>
                                        <Field name= 'price'
                                        type ='text'
                                        value={price}
                                        onChange={e => onInputChange(e)}
                                        className = {'form-control'}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="quelity">  quelity</label>
                                        <Field name= 'quelity'
                                        type ='text'
                                        value={quelity}
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
export default EditProduct;