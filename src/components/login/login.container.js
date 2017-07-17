import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Login from './login'
import { getLists, createUser, toggleSignupModal } from '../../actions'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputtedUsername: '',
      inputtedPassword: '',
    }
    this.handleUsernameInput = this.handleUsernameInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
  }

  handleUsernameInput(text) {
    this.setState({ inputtedUsername: text })
  }
  handlePasswordInput(text) {
    this.setState({ inputtedPassword: text })
  }

  render() {
    return (
      <Login
        createUser={this.props.createUser}
        currentUser={this.props.currentUser}
        handleUsernameInput={this.handleUsernameInput}
        handlePasswordInput={this.handlePasswordInput}
        inputtedUsername={this.state.inputtedUsername}
        inputtedPassword={this.state.inputtedPassword}
        login={this.props.login}
        signupModalVisibility={this.props.signupModalVisibility}
        toggleSignupModal={this.props.toggleSignupModal}
      />
    )
  }
}

LoginContainer.propTypes = {
  createUser: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  signupModalVisibility: PropTypes.bool.isRequired,
  toggleSignupModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  currentUser: state.username,
  signupModalVisibility: state.ui.signupModal,
})

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(getLists(username, password)),
  toggleSignupModal: () => dispatch(toggleSignupModal()),
  createUser: (username, password) => dispatch(createUser(username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
