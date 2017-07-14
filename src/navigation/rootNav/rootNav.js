import { StackNavigator } from 'react-navigation'
import LoginScreen from '../../components/login/loginComponent'
import MainNav from '../mainNav/mainNav'


const RootNav = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainNav },
})

export default RootNav
