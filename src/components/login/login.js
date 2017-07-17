import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
  <View style={styles.screen}>
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

    <TouchableOpacity
      style={styles.button}
      onPress={() => login(inputtedUsername, inputtedPassword)}
    >
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>

    <Text style={styles.createAccountHeader}>Need to make an account?</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => toggleSignupModal()}
    >
      <Text style={styles.buttonText}>Create</Text>
    </TouchableOpacity>
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
