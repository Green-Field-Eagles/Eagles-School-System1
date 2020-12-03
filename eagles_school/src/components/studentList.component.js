import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import studentsMock from '../data/students'
import axios from 'axios';

//creating component to fill table rows
const Student = (props) => (
    <tr>
    <td>{props.student.studentId}</td>
    <td>{props.student.studentName}</td>
    <td>{props.student.studentPassword}</td>
     <td>
      <Link to={"/edit/"+props.student.studentId}>edit</Link> 
    </td>
    <td>
       <a href="#" onClick={() => { props.deleteStudent(props.student.studentId) }}>delete</a>
    </td>
  </tr>
)

//creating studentList component
export default class StudentList extends Component {
    constructor(props){
        super(props)
        this.state = {students: []}
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    //this function is to get all data from database when we open the page
    componentDidMount() {

        // axios.get('/students/')
        //   .then(response => {
        //     this.setState({ students: response.data })
        //   })
        //   .catch((error) => {
        //     this.setState({ students: studentsMock })
        //     // console.log(error);
        //   })
        }

        //function to delete one student depending on studentId
    deleteStudent(id) {
        axios.delete('/students/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          students: this.state.students.filter(el => el.id !== id)
        })
      };

      //this is to list data one by one to create Student component for every student 
    studentsList() {
      const {searchTrim} = this.props;
      const {students} = this.state;
      
        return students.filter((el => el.studentName.includes(searchTrim))).map(currentstudent => {
          return <Student key={currentstudent.id} student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent.studentId}/>;
     })
    }
    
    render() {
        return (
          <div>
            <h3>Students</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Student Id</th>
                  <th>Student Name</th>
                  <th>Password</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                { this.studentsList() }
              </tbody>
            </table>
          </div>
        )
      }    

    }