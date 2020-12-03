import React ,{Component} from 'react';
import axios from 'axios';
import AdminList from './adminList.component'

//creating admin component
export default class CreateAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            adminName :'',
            password : '',
            userType :'',
            users :[]
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
        const users = {
            adminName: this.state.adminName,
            password: this.state.password,
            userType: this.state.userType,
          }
      
          console.log(users);
        //   axios.post('/createadmin',users)
        //   .then((res) => console.log(res.data))
        //   .catch((err) => console.log(err));
    }
    render(){
        return (
        <div>
            <div>
            <h3>Create New Admin</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>AdminName: </label>
                <input  type="text"
                    required
                    name = 'adminName'
                    className="form-control"
                    value={this.state.adminName}
                    onChange={this.changeFormHandle}
                    />
              </div>
              <div className="form-group"> 
                <label>Passowrd: </label>
                <input  type="passowrd"
                    required
                    name='password'
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
                        <option value = 'user'>Student</option>
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
                <input type="submit" value="Create Admin" className="btn btn-primary" />
              </div>
            </form>
          </div>
          <div><AdminList/></div>
            </div>
            
        )
    }
}