import { TabNavigator } from 'react-navigation'
import LoginScreen from '../components/login/'
import ListsScreen from '../components/lists'
import TasksScreen from '../components/tasklist'

// define screens and associated components
const Navigator = TabNavigator({
  Login: { screen: LoginScreen },
  Lists: { screen: ListsScreen },
  Tasks: { screen: TasksScreen },
}, {
  initialRouteName: 'Login',
})

export default Navigator
