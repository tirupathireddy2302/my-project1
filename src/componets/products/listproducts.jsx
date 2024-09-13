import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const Listproducts =()=>{
    const [product,setProduct] = useState([]);

    useEffect (() => {
        fetch ('http://localhost:3000/products')
    .then(response => response.json())
    .then(data  => setProduct(data));
    },[]);
    const deletePost=(id)=>{
        axios.delete(`http://localhost:3000/products/${id}`)
        .then(response => {
            console.log(response.data)
            .then (data => setProduct(data))
        }).catch(e => console.log(e));
    }  
    return(
        <div>
            <h1>List of Products</h1>
            
            <table className ="table table-success table-striped-columns">
                <thead>
                    <tr>
                        <th> S.no</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th> Price</th>
                        <th> Quentity</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                { product.map((thiru,index) =>(
                            <tr key = {index}>
                                <td> {index+1}</td>
                                <td> {thiru.productId}</td>
                                <td>{thiru.productName}</td>
                                <td>{thiru.price}</td>
                                <td>{thiru.quelity}</td>
                                <td>
                                <Link className="btn btn-outline-warning mr-2" to={`/prodoct/Editproduct/${thiru.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger mr-2" onClick={()=>deletePost(thiru.id)} >delete</button>
                                </td>
                                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Listproducts;