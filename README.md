

# REDUX

# Redux docs

## How does React-Redux works in work

The 3 principles of Redux
1. There is only one source of truth



Redux is a standalone library

## How to Read and Update State

Update State in React is this.setState()
Update state in Redux - dispatch actions to the reducer store.dispatch()
Update state in React-Redux - mapDispatchToProps() this.props.dispatch_actions(). Then
dispatch actions to the reducer

Read State in React is this.state.state_property
Read State in Redux is store.getState()
Read State in React-Redux mapStateToProps() this.propr.state_property()


# Redux Actions

Redux is specific
Can be dispatched from React
Described what will happen
Have a required 'type' property
Can have any other optional properties

Example an action with the type login-success might change a property of Redux state called isAuthenticated

# Action Creators in Redux

Can dispatch actions asynchronously

# Reducers in Redux

Reducers directly change the Redux state
Must be pure or cant be async
Takes state and actions as parameters
Usually setup as a switch statement
Each case statement has to match an action type

case ACTION_TYPES-LOGIN_SUCCESS
return {
  ...state
  isAuthenticated: true.
}