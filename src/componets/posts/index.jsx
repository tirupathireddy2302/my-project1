
import { Link, Outlet } from 'react-router-dom'
const Posts = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className ="navbar navbar-expand-lg bg-light">
            <div className ="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                  <Link className="nav-link active" aria-current="page" to='/post/addpost'>Add posts</Link>
                  <Link className="nav-link" to='/post/listpost'>List Of posts</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <Outlet />
      </div>

    </div>
  )
}
export default Posts;