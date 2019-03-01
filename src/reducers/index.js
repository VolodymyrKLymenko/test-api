import { combineReducers } from "redux"

import usersReducer from './user-reducer'
import greetingReducer from './greeting-reducer'

const rootReducer = combineReducers({
    user: usersReducer,
    greeting: greetingReducer
});

export default rootReducer
