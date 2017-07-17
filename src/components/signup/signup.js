import React from 'react'
import { Button, Modal, Text, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

const Signup = ({
  createUser,
  inputtedPassword,
  inputtedUsername,
  handlePasswordInput,
  handleUsernameInput,
  signupModalVisibility,
  toggleSignupModal,
}) => (
  <Modal
    style={{ flex: 1, padding: 5 }}
    animationType={'slide'}
    visible={signupModalVisibility}
    onRequestClose={toggleSignupModal}
  >
    <Text style={styles.createAccountHeader}>Create a new account!</Text>
    <Text>Username:</Text>
    <TextInput
      style={styles.textInput}
      onChangeText={text => handleUsernameInput(text)}
      value={inputtedUsername}
    />
    <Text>Password:</Text>
    <TextInput
      style={styles.textInput}
      onChangeText={text => handlePasswordInput(text)}
      value={inputtedPassword}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={() => createUser(inputtedUsername, inputtedPassword)}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </Modal>
)

Signup.propTypes = {
  createUser: PropTypes.func.isRequired,
  inputtedPassword: PropTypes.string.isRequired,
  inputtedUsername: PropTypes.string.isRequired,
  handlePasswordInput: PropTypes.func.isRequired,
  handleUsernameInput: PropTypes.func.isRequired,
  signupModalVisibility: PropTypes.bool.isRequired,
  toggleSignupModal: PropTypes.func.isRequired,
}

export default Signup
