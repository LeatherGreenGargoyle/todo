import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actionTypes } from '../../reducers'
import Login from './login'
import { getLists } from '../../actions'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputtedUsername: '',
      inputtedPassword: '',
    }
    this.handleUsernameInput = this.handleUsernameInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
  }

  handleUsernameInput(text) {
    this.setState({ inputtedUsername: text })
  }
  handlePasswordInput(text) {
    this.setState({ inputtedPassword: text })
  }

  render() {
    return (
      <Login
        createUser={this.props.createUser}
        currentUser={this.props.currentUser}
        handleUsernameInput={this.handleUsernameInput}
        handlePasswordInput={this.handlePasswordInput}
        inputtedUsername={this.state.inputtedUsername}
        inputtedPassword={this.state.inputtedPassword}
        login={this.props.login}
        signupModalVisibility={this.props.signupModalVisibility}
        toggleSignupModal={this.props.toggleSignupModal}
      />
    )
  }
}

LoginContainer.propTypes = {
  createUser: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  signupModalVisibility: PropTypes.bool.isRequired,
  toggleSignupModal: PropTypes.func.isRequired,
}

const createUser = (username, password) => {
  return (dispatch) => {
    const fetchInit = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch('http://192.168.1.66:3000/newUsers', fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_USER, payload: userObj.userName })
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
        dispatch({ type: actionTypes.SET_USER_ID, payload: userObj._id })
        dispatch({ type: actionTypes.TOGGLE_SIGNUP, payload: {} })
      })
      .catch(err => console.log(err))
  }
}

const mapStateToProps = state => ({
  currentUser: state.username,
  signupModalVisibility: state.ui.signupModal,
})

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(getLists(username, password)),
  toggleSignupModal: () => {
    dispatch({ type: actionTypes.TOGGLE_SIGNUP, payload: {} })
  },
  createUser: (username, password) => dispatch(createUser(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
