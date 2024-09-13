import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Listpost =()=>{
        const [post,setPost] = useState([]);
        useEffect (() => {
            fetch ('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data  => setPost(data));
        },[]);
    const deletePost=(id)=>{
            axios.delete(`http://localhost:3000/posts/${id}`)
            .then(response => {
                console.log(response.data)
                .then (data => setPost(data.reverse()))
            }).catch(e => console.log(e));
        }  
    return(
        <div>
            <h1>List of Posts</h1>
            <table className ="table table-success table-striped-columns">
                <thead>
                    <tr>
                        <th> S.no</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th> Body</th>
                        <th>Updete</th>
                        <th>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                { post.map((user,index) =>(
                            <tr key = {index}>
                                <td> {index+1}</td>
                                <td> {user.Name}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                                <td>
                                <Link className="btn btn-outline-warning mr-2" to={`/post/Editpost/${user.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger mr-2" onClick={()=>deletePost(user.id)} >delete</button>
                                </td>
                                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Listpost;