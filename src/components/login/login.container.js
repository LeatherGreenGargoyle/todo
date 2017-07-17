import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Login from './login'
import { getLists, toggleSignupModal } from '../../actions'

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
        currentUser={this.props.currentUser}
        handleUsernameInput={this.handleUsernameInput}
        handlePasswordInput={this.handlePasswordInput}
        inputtedUsername={this.state.inputtedUsername}
        inputtedPassword={this.state.inputtedPassword}
        login={this.props.login}
        toggleSignupModal={this.props.toggleSignupModal}
      />
    )
  }
}

LoginContainer.propTypes = {
  currentUser: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  toggleSignupModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  currentUser: state.username,
})

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(getLists(username, password)),
  toggleSignupModal: () => dispatch(toggleSignupModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
