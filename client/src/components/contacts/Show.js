import React from 'react'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function ContactShow(props){
    return(
        <div className="container col-md-5">
            {
                !_.isEmpty(props.contact) && (
                    <div>
                    <p className="h3 text-center">Contact Show</p>
                    <p className="h4 text-center">{props.contact.name}-{props.contact.email}-{props.contact.mobile}</p>
                    <div className="container col-md-5 offset-md-5">
                    <Link to='/contacts'><button type="button" className="btn btn-secondary">Back</button></Link>
                    </div>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps=(state,props)=> {
    return{
        contact:state.contacts.find(contact => contact._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ContactShow)