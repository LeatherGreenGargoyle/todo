import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Text, View } from 'react-native'
import { connect } from 'react-redux'
// import ListModal from '../ui/listModal'
import List from '../components/list'
import { actionTypes } from '../reducers'

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task_list_tuples: [],
    }
    this.handlePress = this.handlePress.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const tuples = []
    console.log(nextProps.lists)
    nextProps.lists.forEach(list => {
      list.tasks.forEach(task => {
        tuples.push([task, list])
      })
    })
    this.setState({task_list_tuples: tuples})
  }

  handlePress = (listObj) => {
    this.props.selectList(listObj)
    this.props.toggleListModal()
  }

  render() {
    return (
      <View>
        {console.log(this.state.task_list_tuples)}
        {this.state.task_list_tuples.map((tuple, i) => {
          return (
            <Text key={i} onPress={() => this.handlePress(tuple[1])}>
              {tuple[0].body}, from {tuple[1].title}
            </Text>
          )
        })}
        <List />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
})

const mapDispatchToProps = dispatch => ({
  selectList: listObj => dispatch({ type: actionTypes.SET_CURR_LIST, payload: listObj }),
  toggleListModal: () => dispatch({ type: actionTypes.TOGGLE_LIST, payload: {} }),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
