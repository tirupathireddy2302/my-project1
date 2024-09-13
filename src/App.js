import './App.css';
import { Route, Routes ,Link} from 'react-router-dom';
import Students from './componets/students';
import Users from './componets/users';
import Posts from './componets/posts';
import Listusers from './componets/users/listusers';
import Addusers from './componets/users/addusers';
import Addstutdent from './componets/students/addstudents';
import Liststudents from './componets/students/liststudent';
import Addpost from './componets/posts/addpost';
import Listpost from './componets/posts/listpost';
import Product from './componets/products';
import Addproducts from './componets/products/addproducts';
import Listproducts from './componets/products/listproducts';
import Editpost from './componets/posts/Editeposts';
import Editproducts from './componets/products/editproducts';
import Editstudents from './componets/students/editstudents';
import Viewstudents from './componets/students/viewstudent';
import Editusers from './componets/users/edituser';
import Viewusers from './componets/users/viewusers';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
  <Link className="navbar-brand" to={'/'}>Home</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to ='/students'>students</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to = '/users'>users</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " to ='/post'>post</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to ='/prodoct'>prodocts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <Routes>
      <Route path='/students' element = {<Students/>} exact >
      <Route path='/students/addstudent' element = {<Addstutdent/>}/>
      <Route path='/students/liststudent' element ={<Liststudents/>}/>
      <Route path='/students/editstudent/:id' element ={<Editstudents/>}/>
      <Route path='/students/viewstudent/:id' element ={<Viewstudents/>}/>
      </Route>
      <Route path='/users' element = {<Users/>}  >
      <Route path="/users/addlist"  element ={<Addusers/>} />
      <Route path="/users/listuser" element = {<Listusers/>}/>
      <Route path="/users/Editusers/:id" element = {<Editusers/>}/>
      <Route path="/users/viewusers/:id" element = {<Viewusers/>}/>
      </Route>
      <Route path='/post' element = {<Posts/>}  >
      <Route path='/post/addpost' element = {<Addpost/>}/>
      <Route path='/post/listpost' element ={<Listpost/>}/>
      <Route path='/post/Editpost/:id' element ={<Editpost/>}/>
      </Route>

      <Route path='/prodoct' element = {<Product/>}>
        <Route path='/prodoct/addproduct' element = {<Addproducts/>}/>
        <Route path='/prodoct/listproduct' element ={<Listproducts/>}/>
        <Route path='/prodoct/Editproduct/:id' element ={<Editproducts/>}/>
      </Route>
      
    </Routes>
    
</div>
  );
}

export default App;
