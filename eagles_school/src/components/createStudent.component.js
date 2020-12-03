import React ,{Component} from 'react';
import axios from 'axios';
import StudentList from './studentList.component';

//creating student component
export default class CreateStudent extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName :'',
            studentpassword : '',
            userType :'',
            students :[]
        }
        //to bind this to the functions
        this.changeFormHandle = this.changeFormHandle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
        // const users = {
        //     studentName: this.state.studentName,
        //     studentpassword: this.state.studentpassword,
        //     userType: this.state.userType
        //   }
      
        //   console.log(users);
          console.log(this.state.studentName)
          console.log(this.state.studentpassword)
          console.log(this.state.userType)
        //   axios.post('/create', {
        //     studentName: this.state.studentName,
        //     studentpassword: this.state.studentpassword,
        //     userType: this.state.userType
        //   })
        //   .then((res) => {
        //       console.log(res.studentName)
        //     // console.log(users)
        //    })
        //   .catch((err) => console.log(err));
          axios({
              method : 'post',
              url :'/create',
              data :{
                studentName: this.state.studentName,
                studentpassword: this.state.studentpassword,
                userType: this.state.userType
              },
              headers : {'Content-Type': 'multipart/form-data'}
            });

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
                        {/* {
                            this.state.users.map(function(user) {
                            return <option 
                                key={user}
                                value={user}>{user}
                                </option>;
                            })
                            
                        } */}
                    </select>
            </div>
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