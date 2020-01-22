import React from 'react'
import {connect} from 'react-redux' 
import {startRegisterUser} from '../../actions/user'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
       const formData={
        username:this.state.username,
        email:this.state.email,
        password:this.state.password   
       }
       this.props.dispatch(startRegisterUser(formData,this.props))
       
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div className="container col-md-5">
            <h2 className="text-center">Register</h2>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                    <label htmlFor="exampleInputPassword1"></label>
                    <input type="username" className="form-control mb-3" placeholder="Enter Username..."  name="username" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"></label>
                    <input type="text" className="form-control mb-3" placeholder="Enter email..."  name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1"></label>
                    <input type="password" className="form-control mb-3" placeholder="Enter Password..."  name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
         </div>
        )
    }
}
export default connect()(Register)