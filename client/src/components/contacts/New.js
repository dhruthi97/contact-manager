import React from 'react'
import ContactForm from './Form'
import {connect} from 'react-redux'
import {startAddContact} from '../../actions/contacts'

function ContactNew(props){
    const handleSubmit=(formData)=>{
        props.dispatch(startAddContact(formData, props))
    }
        return(
            <div className="container">
                <p className="h4">Add Contact</p>
                <ContactForm handleSubmit={handleSubmit} />
            </div>
        )
}
export default connect()(ContactNew)