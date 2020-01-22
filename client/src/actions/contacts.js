import axios from 'axios'

export const setContacts = (contacts) => {
    return{
        type:'SET_CONTACTS',
        payload:contacts
    }
}

export const startSetContacts = () => {
    return(dispatch) => {
        axios.get('http://localhost:3035/contacts',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const contacts=response.data
            dispatch(setContacts(contacts))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addContact = (contact) => {
    return{
        type:'ADD_CONTACT',
        payload:contact
    }
}

export const startAddContact = (formData, props) => {
    return(dispatch) => {
        axios.post('http://localhost:3035/contacts/',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
            }else{
                const contact=response.data
                dispatch(addContact(contact))
                props.history.push(`/contacts/${contact._id}`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const editContact = (contact) => {
    return{
        type:'EDIT_CONTACT',
        payload:contact
    }
}

export const startEditContact = (formData, props) => {
    return(dispatch) => {
        axios.put(`http://localhost:3035/contacts/${props.match.params.id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
            }else{
                const contact=response.data
                dispatch(editContact(contact))
                props.history.push(`/contacts/${contact._id}`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const removeContact =(id)=>{
    return{
        type:'REMOVE_CONTACT',
        payload:id
    }
}

export const startRemoveContact=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3035/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            dispatch(removeContact(response.data._id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}