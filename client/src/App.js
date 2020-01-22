import React from 'react';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
import {startLogoutUser} from './actions/user'

import Register from './components/users/Register'
import Login from './components/users/Login'

import Home from './components/common/Home'

import ContactList from './components/contacts/List'
import ContactNew from './components/contacts/New'
import ContactShow from './components/contacts/Show'
import ContactEdit from './components/contacts/Edit'

function App(props) {

  const handleLogout = () => {
    props.dispatch(startLogoutUser())
  }

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="http://localhost:3000/"><p className="h2">Contacts App</p></a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {
              _.isEmpty(props.user) ? (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users/register">Register</Link>
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contacts">contacts</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={handleLogout} to="/">Logout</Link>
                  </li>
                </React.Fragment>
              )
            }
          </ul>
        </div>
      </nav>

      <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/users/register" component={Register} />
            <Route path="/users/login" component={Login}/>

            <Route path="/" component={Home} exact={true}/>
            <Route path="/contacts" component={ContactList} exact={true}/>
            <Route path="/contacts/new" component={ContactNew}/>
            <Route path="/contacts/:id" component={ContactShow} exact={true}/>
            <Route path="/contacts/edit/:id" component={ContactEdit}/>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)