import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//creating component to fill table rows
const Admin = (props) => (
    <tr>
    <td>{props.admin.adminId}</td>
    <td>{props.admin.adminName}</td>
    <td>{props.admin.adminPassword}</td>
     <td>
      <Link to={"/edit/"+props.admin.adminId}>edit</Link> 
    </td>
    <td>
       <a href="#" onClick={() => { props.deleteadmin(props.admin.adminId) }}>delete</a>
    </td>
  </tr>
)

//creating adminList component
export default class AdminList extends Component {
    constructor(props){
        super(props)
        this.state = {admins: []}
        this.deleteAdmin = this.deleteAdmin.bind(this)
    }
    //this function is to get all data from database when we open the page
    componentDidMount() {
        // axios.get('/admins/')
        //   .then(response => {
        //     this.setState({ admins: response.data })
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
        }

        //function to delete one admin depending on adminId
      deleteAdmin(id) {
        axios.delete('/admins/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          admins: this.state.admins.filter(el => el.id !== id)
        })
      };

      //this is to list data one by one to create admin component for every admin 
    adminsList() {
        return this.state.admins.map(currentadmin => {
          return <Admin admin={currentadmin} deleteadmin={this.deleteadmin} key={currentadmin.adminId}/>;
     })
    }
    
    render() {
        return (
          <div>
            <h3>Admins</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Admin Id</th>
                  <th>Admin Name</th>
                  <th>Password</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                { this.adminsList() }
              </tbody>
            </table>
          </div>
        )
      }    

    }