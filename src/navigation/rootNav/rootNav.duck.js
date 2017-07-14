import { NavigationActions } from 'react-navigation'
import RootNav from './rootNav'

const initialRootNavState = RootNav.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }))

export default (state = initialRootNavState, action) => (
  RootNav.router.getStateForAction(action, state)
)
// reducer
