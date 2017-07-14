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
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

LoginScreen.propTypes = {
  currentUser: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({ currentUser: state.username })

const mapDispatchToProps = dispatch => ({
  setUser: username => dispatch({ type: actionTypes.SET_USER, payload: username }),
  setLists: listsArr => dispatch({ type: actionTypes.SET_LISTS, payload: listsArr })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
