import { Formik,Form,Field } from 'formik'
import axios from 'axios'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';

const Editpost =()=>{
    const {id} =useParams();
    const [values,setValues] = useState({
        Name : '',
        title : '',
        body : '',
        acceptTerms : false
    })
    const { Name, title, body } = values;
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
        axios.put(`http://localhost:3000/posts/${id}`,values)
        .then (response =>console.log(response))      
    }
    const loadPost = async id =>{
        const result = await axios.get(`http://localhost:3000/posts/${id}`);
    setValues(result.data);
    }
    
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1>Update Data</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="registatoin-form">
                        <Formik 
                        onSubmit ={e => handleSumbit(e)}>
                                <Form>
                                    <div className="inputBox">
                                        <label htmlFor="Name"> Name</label>
                                        <Field name = 'Name'
                                        type ='text'
                                        value={Name}
                                        onChange={e => onInputChange(e)}
                                       />
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="title">Title</label>
                                        <Field name= 'title'
                                        type ='text'
                                        value={title}
                                        onChange={e => onInputChange(e)}/>
                                        
                                    </div>
                                    <div className="inputBox">
                                        <label htmlFor="body">Body</label>
                                        <Field name= 'body'
                                        type ='text'
                                        value={body}
                                        onChange={e => onInputChange(e)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button className ="submitBtn" type ='sumbit'>
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
export default Editpost;