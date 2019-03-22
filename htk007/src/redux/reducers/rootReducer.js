

import loginReducer from './UserReducres';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    loginReducer,
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;