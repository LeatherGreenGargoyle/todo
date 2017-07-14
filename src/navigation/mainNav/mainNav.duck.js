import { NavigationActions } from 'react-navigation'
import MainNav from './mainNav'

const initialMainNavState = MainNav.router.getStateForAction(NavigationActions.navigate({ routeName: 'Lists' }))

export default (state = initialMainNavState, action) => (
  MainNav.router.getStateForAction(action, state)
)
