import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import { actionTypes } from '../../reducers'

const textInputStyles = {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
}

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputUsername: 'Input username',
      inputPassword: 'Input password',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const fetchInit = {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.inputUsername,
        password: this.state.inputPassword,
      }),
      headers: {
        'Content-Type': 'application/JSON'
      },
    }

    return fetch('http://192.168.1.66:3000/users', fetchInit)
      .then(data => data.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <View>
        <Text>Currently Logged In As: {this.props.currentUser.username}</Text>
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
      </View>
    )
  }
}

LoginScreen.propTypes = {
  currentUser: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
}

const getLists = (username, password) => {
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

const mapStateToProps = state => ({ currentUser: state.username })

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(getLists(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
