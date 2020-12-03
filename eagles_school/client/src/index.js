import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route} from   "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component'
import CreateStudent from './components/createStudent.component';
import CreateAdmin from './components/createAdmin.component';
import MarksForm from './components/marks.component';
<<<<<<< HEAD:eagles_school/src/index.js
import loginForm from './components/loginForm'
=======
import EditAdmin from './components/editAdmin.component';
import CreateSubject from './components/CreateSubject.component';


>>>>>>> main:eagles_school/client/src/index.js

function App()  {
  
  return (
    
    <Router>
      <Navbar/>
        <br/>
        <div className ="container">
         <Route path ='/create/student'  component ={CreateStudent}></Route>
         <Route path ='/create/admin'  component ={CreateAdmin}></Route>
         <Route path ='/crud/marks'  component ={MarksForm}></Route>
<<<<<<< HEAD:eagles_school/src/index.js
         <Route path ='/login'  component ={loginForm}></Route>

=======
         <Route path ='/editAdmin/'  component ={EditAdmin}></Route>
         <Route path ='/createsubject'  component ={CreateSubject}></Route>
         


       
>>>>>>> main:eagles_school/client/src/index.js

        </div>


  </Router>
  
  );
}


ReactDOM.render(<App />,document.getElementById('app'));