import { TabNavigator } from 'react-navigation'
import LoginScreen from '../components/login/login.component'
import ListsScreen from '../components/lists'
import TasksScreen from '../components/tasklist.container'


const Navigator = TabNavigator({
  Login: { screen: LoginScreen },
  Lists: { screen: ListsScreen },
  Tasks: { screen: TasksScreen },
}, {
  initialRouteName: 'Login',
})

export default Navigator
