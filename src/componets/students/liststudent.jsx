import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
const Liststudents =()=>{
    const [students,setStudents] = useState([]);

    useEffect (() => {
        fetch ('http://localhost:3000/student')
    .then(response => response.json())
    .then(data  => setStudents(data));
    },[]);
    const deleteStudent=(id)=>{
        axios.delete(`http://localhost:3000/student/${id}`)
        .then(response => {
            console.log(response.data)
            .then (data => setStudents(data))
        }).catch(e => console.log(e));
    }  
    return(
        <div>
            <h1>List of Students</h1>
            <table className ="table table-success table-striped-columns">
                <thead>
                    <tr>
                        <th> S.no</th>
                        <th>Name</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                { students.map((user,index) =>(
                            <tr key = {index}>
                                <td> {index+1}</td>
                                <td> {user.firstName+user.lastName}</td>
                                <td>
                                <Link className="btn btn-outline-primary mr-2" to={`/students/viewstudent/${user.id}`}>View</Link>
                                </td>
                                <td>
                                <Link className="btn btn-outline-warning mr-2" to={`/students/editstudent/${user.id}`}>Edit</Link>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger mr-2" onClick={()=>deleteStudent(user.id)} >delete</button>
                                </td>
                                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Liststudents;