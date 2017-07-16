import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Lists from './lists'
import {
  deleteList,
  selectCurrentList,
  submitNewList,
  toggleListModal,
} from '../../actions'

class ListsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newList: '',
    }
    this.handleListRemove = this.handleListRemove.bind(this)
    this.handleNewListInput = this.handleNewListInput.bind(this)
    this.handleSubmitNewList = this.handleSubmitNewList.bind(this)
    this.handleListClick = this.handleListClick.bind(this)
  }

  handleListRemove(idx) {
    const selectedListId = this.props.lists[idx]._id
    this.props.deleteList(selectedListId, this.props.userId)
  }

  handleNewListInput(text) {
    this.setState({ newList: text })
  }

  handleSubmitNewList() {
    this.props.submitNewList(this.state.newList, this.props.userId)
  }

  handleListClick(listObj) {
    this.props.selectList(listObj)
    this.props.toggleModal()
  }

  render() {
    const { lists } = this.props
    return (
      <Lists
        currentNewList={this.state.newList}
        handleListRemove={this.handleListRemove}
        handleNewListInput={this.handleNewListInput}
        handleSubmitNewList={this.handleSubmitNewList}
        handleListClick={this.handleListClick}
        lists={lists}
      />
    )
  }
}

ListsContainer.propTypes = {
  deleteList: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
  selectList: PropTypes.func.isRequired,
  submitNewList: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  lists: state.lists,
  userId: state.userId,
})

const mapDispatchToProps = dispatch => ({
  submitNewList: (newList, userId) => dispatch(submitNewList(newList, userId)),
  selectList: listObj => dispatch(selectCurrentList(listObj)),
  deleteList: (listId, userId) => dispatch(deleteList(listId, userId)),
  toggleModal: () => dispatch(toggleListModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer)
