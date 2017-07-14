import React, { Component } from 'react'
import { Modal, Text } from 'react-native'
import { connect } from 'react-redux'
import ListsUI from '../ui/lists.ui'

class Lists extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <ListsUI lists={this.props.lists} />
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
