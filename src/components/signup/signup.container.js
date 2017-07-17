import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Signup from './signup'
import { createUser, toggleSignupModal } from '../../actions'

// SignupContainer renders a Signup component
class SignupContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputtedUsername: '',
      inputtedPassword: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.handleUsernameInput = this.handleUsernameInput.bind(this)
  }

  handleSubmit() {
    this.props.createUser(this.state.inputtedUsername, this.state.inputPassword)
  }

  handlePasswordInput(text) {
    this.setState({ inputtedPassword: text })
  }

  handleUsernameInput(text) {
    this.setState({ inputtedUsername: text })
  }

  render() {
    return (
      <Signup
        createUser={this.props.createUser}
        inputtedPassword={this.state.inputtedPassword}
        inputtedUsername={this.state.inputtedUsername}
        handlePasswordInput={this.handlePasswordInput}
        handleUsernameInput={this.handleUsernameInput}
        signupModalVisibility={this.props.signupModalVisibility}
        toggleSignupModal={this.props.toggleSignupModal}
      />
    )
  }
}

SignupContainer.propTypes = {
  createUser: PropTypes.func.isRequired,
  signupModalVisibility: PropTypes.bool.isRequired,
  toggleSignupModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  signupModalVisibility: state.ui.signupModal,
})

const mapDispatchToProps = dispatch => ({
  toggleSignupModal: () => dispatch(toggleSignupModal()),
  createUser: (username, password) => dispatch(createUser(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
