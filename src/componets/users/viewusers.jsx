import { useEffect, useState } from "react"
const Viewusers =()=>{
    const [users,setUsers] = useState([]);

    useEffect (() => {
        fetch ('http://localhost:3000/users')
    .then(response => response.json())
    .then(data  => setUsers(data));
    },[]);
    return(
        <div>
            <h1>List of users</h1>
            <table className ="table table-success table-striped-columns">
                <thead>
                    <tr>
                        <th> S.no</th>
                        <th>Full Name</th>
                        <th>User Name</th>
                        <th> Number</th>
                        <th> Email</th>
                        <th>Password</th>
                        
                    </tr>
                </thead>
                <tbody>
                { users.map((user,index) =>(
                            <tr key = {index}>
                                <td> {index+1}</td>
                                <td> {user.fullName}</td>
                                <td>{user.userName}</td>
                                <td>{user.number}</td>
                                <td>{user.email}</td>
                                <td>|{user.password}</td>
                                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Viewusers;