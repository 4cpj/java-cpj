import {userInfo} from '../initialState'
import * as tpye from '../action/'

const reducer = (state = userInfo, action) => {
  switch (action.type) {
    case tpye.LOGIN:
      return Object.assign({}, state, action.text)
    default: return state
  }
}

export default reducer
