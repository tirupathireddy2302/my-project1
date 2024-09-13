import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Listusers =()=>{
    const [users,setUsers] = useState([]);

    useEffect (() => {
        fetch ('http://localhost:3000/users')
    .then(response => response.json())
    .then(data  => setUsers(data));
    },[]);
    const deletePost=(id)=>{
        axios.delete(`http://localhost:3000/users/${id}`)
        .then(response => {
            console.log(response.data)
            .then (data => setUsers(data))
        }).catch(e => console.log(e));
    }  
    return(
        <div>
            <h1>List of users</h1>
            <table className ="table table-success table-striped-columns">
                <thead>
                    <tr>
                        <th> S.no</th>
                        <th>Full Name</th>
                        <th>User Name</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                { users.map((user,index) =>(
                            <tr key = {index}>
                                <td> {index+1}</td>
                                <td> {user.fullName}</td>
                                <td>{user.userName}</td>
                                <td>
                                <Link className="btn btn-outline-primary mr-2" to={`/users/viewusers/${user.id}`}>View</Link>
                                </td>
                                <td>
                                <Link className="btn btn-outline-warning mr-2" to={`/users/Editusers/${user.id}`}>Edit</Link>
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
export default Listusers;