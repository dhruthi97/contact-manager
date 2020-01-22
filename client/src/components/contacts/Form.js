import React from 'react'

export default class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name ? props.name : '',
            email:props.email ? props.email : '',
            mobile:props.mobile ? props.mobile : '',
            nameError:"",
            emailError:"",
            mobileError:""       
         }
    }
    validate = () => {
        let nameError=""
        let emailError=""
        let mobileError=""
        if(!this.state.name){
            nameError='Name must be filled out'
        }
        if(!this.state.email){
            emailError='Email must be filled out'
        }
        if(!this.state.mobile){
            mobileError='mobile must be filled out'
        }
        if(nameError|| emailError || mobileError){
            this.setState({nameError, emailError, mobileError})
            return false
        }
        return true
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const isValid = this.validate()

        if(isValid){
            const formData = {
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile,
        
            }
            this.props.handleSubmit(formData)
        }
    }
    render(){
        return(
            <div className="container col-md-5">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" className="form-control" id="name" placeholder="type name..." name="name" value={this.state.name} onChange={this.handleChange} /><div style = {{color:'red'}}>{this.state.nameError} </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input type="text" className="form-control" id="email" placeholder="type email..." name="email" value={this.state.email} onChange={this.handleChange} /><div style = {{color:'red'}}>{this.state.emailError} </div>
                </div>
                <div className="form-group">
                    <label htmlFor="mobile"></label>
                    <input type="text" className="form-control" id="mobile" placeholder="type mobile..." name="mobile" value={this.state.mobile} onChange={this.handleChange}/><div style = {{color:'red'}}>{this.state.mobileError} </div>
                </div><hr/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}