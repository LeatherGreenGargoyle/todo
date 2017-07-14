import React, { Component } from 'react'
import { Button, Modal, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

const textInputStyles = {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
}

class SignupModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputUsername: 'Input username',
      inputPassword: 'Input password',
    }
    this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.createUser(this.state.inputUsername, this.state.inputPassword)
  }

  render() {
    return (
      <Modal
        style={{ flex: 1 }}
        animationType={'slide'}
        visible={this.props.visible}
        onRequestClose={this.props.toggleSignupModal}
      >
        <Text>Create a new account!</Text>
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
          onPress={() => this.props.createUser(this.state.inputUsername, this.state.inputPassword)}
        />
      </Modal>
    )
  }
}

SignupModal.propTypes = {
  createUser: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  toggleSignupModal: PropTypes.func.isRequired,
}

export default SignupModal
