import { TabNavigator } from 'react-navigation'
import LoginScreen from '../components/login/login.component'
import ListsScreen from '../components/lists/listsComponent'
import TasksScreen from '../components/tasks/tasksComponent'


const Navigator = TabNavigator({
  Login: { screen: LoginScreen },
  Lists: { screen: ListsScreen },
  Tasks: { screen: TasksScreen },
}, {
  initialRouteName: 'Login',
})

export default Navigator
