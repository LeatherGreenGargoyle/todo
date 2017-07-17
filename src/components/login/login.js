import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text, TextInput, View } from 'react-native'
import SignupModal from '../signup'
import styles from './style'

const Login = ({
  currentUser,
  handleUsernameInput,
  handlePasswordInput,
  inputtedPassword,
  inputtedUsername,
  login,
  toggleSignupModal,
}) => (
  <View>
    <Text style={styles.currUserDisplay}>Currently Logged In As: {currentUser}</Text>
    <Text>Username: </Text>
    <TextInput
      style={styles.textInput}
      onChangeText={text => handleUsernameInput(text)}
      value={inputtedUsername}
    />
    <Text>Password: </Text>
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
    <SignupModal />
  </View>
)

Login.propTypes = {
  currentUser: PropTypes.string.isRequired,
  handleUsernameInput: PropTypes.func.isRequired,
  handlePasswordInput: PropTypes.func.isRequired,
  inputtedPassword: PropTypes.string.isRequired,
  inputtedUsername: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  toggleSignupModal: PropTypes.func.isRequired,
}

export default Login
