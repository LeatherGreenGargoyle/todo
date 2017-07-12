import { NavigationActions } from 'react-navigation'
import { RootNav } from './navigators'

const initialState = RootNav.router.getStateForAction(NavigationActions.init())

export default (state = initialState, action) => {
  const nextState = RootNav.router.getStateForAction(action, state)
  return nextState || state
}
