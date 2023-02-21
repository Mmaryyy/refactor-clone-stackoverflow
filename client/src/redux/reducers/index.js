import { combineReducers } from 'redux'
import { userDataReducer } from "./userDataReducer";
import { contentsReducer } from "./contentsReducer";
import { answersReducer } from "./answersReducer";
import { contentReducer } from './contentReducer';

const rootReducer = combineReducers({
    userDataReducer,
    contentsReducer,
    answersReducer,
    contentReducer
})

export default rootReducer