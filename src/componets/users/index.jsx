import{ Link,Outlet  } from 'react-router-dom'
 const Users = () => {

    return(
        <div className="conatainer">
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to ='/users/addlist'>Add List</Link>
          <Link className="nav-link" to = '/users/listuser'>List Of users</Link>
    </div>
    </div>
  </div>
</nav>
  </div>
    </div>
    <div>
    <Outlet/>
    </div>
        </div>
    )
} 
export default Users;