import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route} from   "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component'
import CreateStudent from './components/createStudent.component';
import CreateAdmin from './components/createAdmin.component';
import MarksForm from './components/marks.component';
import loginForm from './components/loginForm'

function App()  {
  
  return (
    
    <Router>
      <Navbar/>
        <br/>
        <div className ="container">
         <Route path ='/create/student'  component ={CreateStudent}></Route>
         <Route path ='/create/admin'  component ={CreateAdmin}></Route>
         <Route path ='/crud/marks'  component ={MarksForm}></Route>
         <Route path ='/login'  component ={loginForm}></Route>


        </div>


  </Router>
  
  );
}


ReactDOM.render(<App />,document.getElementById('app'));