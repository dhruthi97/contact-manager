import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveContact} from '../../actions/contacts'

function ContactList(props){
    const handleRemove=(id)=>{
        props.dispatch(startRemoveContact(id))
    }
        return(
            <div className="container col-md-8">
                <p className="h3 text-center">Listing Contacts-{props.contacts.length}</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Actions</th>
                            {/* <th scope="col">Edit</th>
                            <th scope="col">Remove</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.contacts.map((contact,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.mobile}</td>
                                        <td><div className="btn-group" role="group" aria-label="Basic example">
                                    <Link to={`/contacts/${contact._id}`}><button type="button" className="btn btn-primary">Show</button></Link>
                                    <Link to={`/contacts/edit/${contact._id}`}><button type="button" className="btn btn-primary">Edit</button></Link>
                                    <button type="submit" className="btn btn-danger"
                                        onClick={()=>{                                            
                                        const confirmRemove=window.confirm("Are you sure?")
                                            if(confirmRemove){
                                                handleRemove(contact._id)
                                            }
                                        }} >Remove</button></div></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table><hr/>
            <Link to="/contacts/new"><button type="button" className ="btn btn-secondary">Add Contact</button></Link>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        contacts:state.contacts
    }
}
export default connect(mapStateToProps)(ContactList)