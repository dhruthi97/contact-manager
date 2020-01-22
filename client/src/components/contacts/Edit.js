import React from 'react'
import ContactForm from './Form'
import _ from 'lodash'
import {connect} from 'react-redux'
import {startEditContact} from '../../actions/contacts'

function ContactEdit(props){
    const handleSubmit = (formData) => {
        props.dispatch( startEditContact( formData, props))
    }
        return(
            <div className="container">
                {
                    !_.isEmpty(props.contact) && (
                        <div>
                        <p className="h4 text-center">Edit Contact-{props.contact.name}</p>
                        <ContactForm {...props.contact} handleSubmit={handleSubmit}/>
                        </div>
                    )
                }
        </div>
    )   
}

const mapStateToProps=(state, props) => {
    return{
        contact:state.contacts.find(contact => contact._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ContactEdit)