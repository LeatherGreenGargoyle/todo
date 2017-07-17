import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import { actionTypes } from '../../reducers'
import SignupModal from '../../ui/signupModal'

const textInputStyles = {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
}

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputUsername: '',
      inputPassword: '',
    }
  }

  render() {
    return (
      <View>
        <Text>Currently Logged In As: {this.props.currentUser}</Text>
        <TextInput
          style={textInputStyles}
          onChangeText={inputUsername => this.setState({ inputUsername })}
          value={this.state.inputUsername}
        />
        <TextInput
          style={textInputStyles}
          onChangeText={inputPassword => this.setState({ inputPassword })}
          value={this.state.inputPassword}
        />
        <Button
          title="Submit"
          onPress={() => this.props.login(this.state.inputUsername, this.state.inputPassword)}
        />
        <Text>Create a new account</Text>
        <Button
          title="Create a new account"
          onPress={() => {
            console.log('clicked 1')
            this.props.toggleSignupModal()
          }}
        />
        <SignupModal
          visible={this.props.signupModalVisibility}
          toggleSignupModal={this.props.toggleSignupModal}
          createUser={this.props.createUser}
        />
      </View>
    )
  }
}

LoginScreen.propTypes = {
  createUser: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  signupModalVisibility: PropTypes.bool.isRequired,
  toggleSignupModal: PropTypes.func.isRequired,
}

const getLists = (username, password) => {
  console.log('click')
  return (dispatch) => {
    const fetchInit = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/JSON' },
    }

    return fetch('http://192.168.1.66:3000/users', fetchInit)
      .then(data => data.json())
      .then((userObj) => {
        dispatch({ type: actionTypes.SET_USER, payload: userObj.userName })
        dispatch({ type: actionTypes.SET_LISTS, payload: userObj.lists })
        dispatch({ type: actionTypes.SET_USER_ID, payload: userObj._id })
      })
      .catch(err => console.log(err))
  }
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
    console.log('clicked')
    dispatch({ type: actionTypes.TOGGLE_SIGNUP, payload: {} })
  },
  createUser: (username, password) => dispatch(createUser(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
