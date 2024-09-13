
import{ Link, Outlet,  } from 'react-router-dom'

 const Product = () => {
    
    return(
        <div className="container">
          
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
          <Link className="nav-link active" aria-current="page" to ='/prodoct/addproduct'>Add products</Link>
          <Link className="nav-link" to = '/prodoct/listproduct'>list of Product</Link>

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
export default Product;