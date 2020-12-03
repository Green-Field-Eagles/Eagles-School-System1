import React, { Component } from 'react';
import Axios from 'axios';
class LoginForm extends Component {
    state = {
        account : {
            username : '',
            password : '',
            login : false,
            store : null
        },
        errors : {}
    }

    // login(){

    //     fetch('http://localhost:3006/adminlogin',{
    //         method: "POST",
    //         body : JSON.stringify(this.state)
    //     }).then((response) =>{
    //         response.json().then((result) =>{
    //             console.warn("result", result)
    //             localStorage.setItem('login',JSON.stringify({
    //                 login : true,
    //                 token : result.token
    //             }))
    //             this.setState({login : true})
    //         })
    //     })
    // }


    validate = () => {
     if(this.state.account.username.trim() === '')
       this.errors.username = 'username is required'
       if(this.state.account.password.trim() === '')
       this.errors.password = 'password is required'
       return Object.keys(this.errors).length === null ? 0 : this.errors;
    }
    username = React.createRef();
    componentDidMount(){
        this.username.current.focus();
    }
    handleSubmet = e => {
        e.preventDefault()
        const username = this.username.current.value;
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if(errors){
            return;
        }
        const data = {
            username : this.state.username,
            password : this.state.password
        }
        // Axios.post('/login', data)
        // .then(res => {
        //     console.log(res)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    };
    handleChange = e => {
        const account = {...this.state.accout}
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});
    }
    render() {
        // const {account} = this.state;
        return <div>
            <h1>Log In</h1>
                <form onSubmit = {this.handleSubmet}>
                    <div className="form-group"><label htmlFor="username"></label>
                    username<input
                     name ='username'
                     value = {this.state.account.username}
                     onChange = {this.handleChange}
                    type="text" ref={this.username}
                     className="form-control"/></div>
                    <div className="form-group"><label htmlFor="password"></label>
                    password<input
                     value = {this.state.account.password}
                      name ='password'
                      onChange = {this.handleChange}
                      type="text"
                       className="form-control"/></div>
                    <button onClick = {(this.login)} className="btn btn-primary">login</button>
                </form>
        </div>
    }
}
export default LoginForm;