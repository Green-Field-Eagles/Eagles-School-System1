import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class StudentsSubject extends Component {
    
    constructor(props){
        super(props)
        
        this.state={
            check : false,
            subjects: [],
        }
    }
   

     //   this function is to get all data from database when we open the page
     componentDidMount() {
        axios.get('/getAllSubjects')
          .then(response => {
            this.setState({ subjects: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
        }



    render() {
        return (
          

            <div>
                {
                   this.state.subjects.map(subject =>{

                    <input type='checkbox' name = 'check' value={subject} checked={this.state.checked}> {subject} </input>
                   }) 
                }
             

            </div>
            //  <div>
            //    {
            //    this.state.subjects.map(subject =>{
    
            //        <input type='checkbox' subject={subject} key={subject}/>
    
            //    })
    

            //     }
            //     </div>



        )

    }

  

      



      
      

    }

  

  