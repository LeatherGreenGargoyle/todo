import React from 'react'
import { Button, Modal, Text, TextInput } from 'react-native'
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
    style={{ flex: 1 }}
    animationType={'slide'}
    visible={signupModalVisibility}
    onRequestClose={toggleSignupModal}
  >
    <Text>Create a new account!</Text>
    <TextInput
      style={styles.textInput}
      onChangeText={text => handleUsernameInput(text)}
      value={inputtedUsername}
    />
    <TextInput
      style={styles.textInput}
      onChangeText={text => handlePasswordInput(text)}
      value={inputtedPassword}
    />
    <Button
      title="Submit"
      onPress={() => createUser(inputtedUsername, inputtedPassword)}
    />
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
