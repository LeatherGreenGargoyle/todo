import { NavigationActions } from 'react-navigation'
import Navigator from './nav'

const initNavState = Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }))

export default (state = initNavState, action) => {
  return Navigator.router.getStateForAction(action, state)
}
