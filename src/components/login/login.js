import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text, TextInput, View } from 'react-native'
import SignupModal from '../../ui/signupModal'
import styles from './style'

const Login = ({
  createUser,
  currentUser,
  handleUsernameInput,
  handlePasswordInput,
  inputtedPassword,
  inputtedUsername,
  login,
  signupModalVisibility,
  toggleSignupModal,
}) => (
  <View>
    <Text>Currently Logged In As: {currentUser}</Text>
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
      onPress={() => login(inputtedUsername, inputtedPassword)}
    />
    <Text>Create a new account</Text>
    <Button
      title="Create a new account"
      onPress={() => toggleSignupModal()}
    />
    <SignupModal
      visible={signupModalVisibility}
      toggleSignupModal={toggleSignupModal}
      createUser={createUser}
    />
  </View>
)

Login.propTypes = {
  createUser: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
  handleUsernameInput: PropTypes.func.isRequired,
  handlePasswordInput: PropTypes.func.isRequired,
  inputtedPassword: PropTypes.string.isRequired,
  inputtedUsername: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  signupModalVisibility: PropTypes.bool.isRequired,
  toggleSignupModal: PropTypes.func.isRequired,
}

export default Login
