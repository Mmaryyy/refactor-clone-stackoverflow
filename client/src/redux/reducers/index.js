import { combineReducers } from 'redux'
import { userDataReducer } from "./userDataReducer";
import { contentsReducer } from "./contentsReducer";
import { answersReducer } from "./answersReducer";

const rootReducer = combineReducers({
    userDataReducer,
    contentsReducer,
    answersReducer
})

export default rootReducer