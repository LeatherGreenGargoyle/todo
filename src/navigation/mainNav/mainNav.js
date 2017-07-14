import { TabNavigator } from 'react-navigation'
import ListsScreen from '../../components/lists/listsComponent'
import TasksScreen from '../../components/tasks/tasksComponent'


const MainNav = TabNavigator({
  Lists: { screen: ListsScreen },
  Tasks: { screen: TasksScreen },
})

export default MainNav
