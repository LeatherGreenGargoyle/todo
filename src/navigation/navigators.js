import React from 'react'
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ListsScreen from '../components/lists/listsComponent'
import TasksScreen from '../components/tasks/tasksComponent'
import LoginScreen from '../components/login/loginComponent'

const MainNav = TabNavigator({
  Lists: { screen: ListsScreen },
  Tasks: { screen: TasksScreen },
})

export const RootNav = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainNav },
})

const RootNavWithState = (dispatch, nav) => (
  <RootNav navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

RootNavWithState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(RootNavWithState)
