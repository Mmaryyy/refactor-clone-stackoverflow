import { combineReducers } from 'redux'
import { userDataReducer } from "./userDataReducer";
import { answersReducer } from "./answersReducer";
import { contentsReducer } from './contentsReducer';


const rootReducer = combineReducers({
    userDataReducer,
    answersReducer,
    contentsReducer
})

export default rootReducer