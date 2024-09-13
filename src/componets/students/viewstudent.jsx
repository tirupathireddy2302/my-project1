
import { useEffect, useState } from "react"
const Viewstudents =()=>{
    const [students,setStudents] = useState([]);

    useEffect (() => {
        fetch ('http://localhost:3000/student')
    .then(response => response.json())
    .then(data  => setStudents(data));
    },[]);
    return(
        <div>
            <h1>List of Students</h1>
            <table className ="table table-success table-striped-columns">
                <thead>
                    <tr>
                        <th> S.no</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Number</th>
                        <th>Address</th>
                        <th>College Name</th>
                        <th>quelification</th>
                        <th>Email</th>
                        <th> Password </th>
                    </tr>
                </thead>
                <tbody>
                { students.map((user,index) =>(
                            <tr key = {index}>
                                <td> {index+1}</td>
                                <td> {user.firstName+user.lastName}</td>
                                <td>{user.dateofbirth}</td>
                                <td>{user.number}</td>
                                <td>{user.address}</td>
                                <td>{user.collegeName}</td>
                                <td>{user.quelification}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Viewstudents;