import React ,{Component} from 'react';
import axios from 'axios';
import StudentList from './studentList.component';
//creating student component
export default class CreateStudent extends Component {
    constructor(props){
        super(props);
        this.state={
            check :'false',
            studentName :'',
            studentpassword : '',
            userType :'',
            students :[],
            subjects : [],
            
        }
        //to bind this to the functions
        this.changeFormHandle = this.changeFormHandle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

     //   this function is to get all data from database when we open the page
     componentDidMount() {
        axios.get('/getAllSubjects')
          .then(response => {
              
            this.setState({ subjects: response.data })

             this.state.subjects.map(subject =>{
                 console.log(subject.subjectName)
             })
            
          })
          .catch((error) => {
            console.log(error);
          })
        }

        
    //function to handle alll input fields
    changeFormHandle(e){
        const target =e.target;
        const value = target.value
        const name = target.name;
        //[name] will change according to eachh input depending on each name of input
        this.setState({
         [name] : value
        })
    }
    //function to submit form
    onSubmit(e){
        e.preventDefault();
   
          console.log(this.state.studentName)
          console.log(this.state.studentpassword)
          console.log(this.state.userType)
        //   console.log('submit',this.state.subjects)
      
          axios({
              method : 'post',
              url :'/create/student',
              data :{
                studentName: this.state.studentName,
                studentpassword: this.state.studentpassword,
                userType: this.state.userType,
                // subjects: this.state.subjects.subjectName
              },
             
              headers : {'Content-Type': 'multipart/form-data'}
              
            });
        
      //for take the user to the home after submite the form
    //we need to uncomment this line
    // window.location = '/';
    }

   

    render(){
       
        return (
            <div>
            <div> 
                <h3>Create New Student</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Student name: </label>
                    <input  type="text"
                        required
                        name = 'studentName'
                        className="form-control"
                        value={this.state.studentName}
                        onChange={this.changeFormHandle}
                        />
                </div>
                <div className="form-group"> 
                    <label>Passowrd: </label>
                    <input  type="passowrd"
                        required
                        name='studentpassword'
                        className="form-control"
                        value={this.state.passowrd}
                        onChange={this.changeFormHandle}
                        />
                </div>
                <div className="form-group"> 
                    <label>UserType: </label>
                    <select ref="userInput"
                        required
                        name ='userType'
                        className="form-control"
                        value={this.state.userType}
                        onChange={this.changeFormHandle}>
                            <option value = 'Student'>Student</option>
                            <option value = 'Admin'>Admin</option>
                       
                    </select>
            </div>
            
           
                {/* {
                   this.state.subjects.map(subject =>{
                   
                    <input  type='checkbox' name = 'subjects' value={subject} checked={this.state.checked} onChange={this.changeFormHandle}/>;
                    <label>{subject.subjectName}</label>
                   })
                } */}

                 {/* <div>
                {
                this.state.subjects.map(subject =>
                     <tr>
                        <td>
                        <div class="checkbox checkbox-circle checkbox-color-scheme">
                            <label class="checkbox-checked">
                            <input type="checkbox" value={subject.subjectName} onChange={this.onAddingItem} /> <span class="label-text">{subject.subjectName}</span>
                            </label>
                        </div>
                        </td>
                 </tr>
                )}
      </div> */}
            
            
                <div className="form-group">
                    <input type="submit" value="Create Student" className="btn btn-primary" />
                </div>
                </form>
                </div>   
                <div>
                    <StudentList />
                </div>
          </div>
        )
    }
}