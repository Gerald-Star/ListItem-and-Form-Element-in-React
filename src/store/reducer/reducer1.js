import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
  stateCon1: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        stateCon1: true
      }
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateCon1: false
      }
    default:
      return state
  }
}

export default rootReducer