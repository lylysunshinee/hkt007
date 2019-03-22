


import { User_Login_Success, User_Login_Failed } from '../actions/UserAction';


let initialState = {
    login: {
        success: false,
        isDone: false,
        data: "",
    },
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case User_Login_Success:
            return {
                ...state,
                login: {
                    success: true,
                    isDone: true,
                    data: action.data
                }
            };
        case User_Login_Failed:
            return {
                ...state,
                login: {
                    success: false,
                    isDone: true,
                    data: action.error
                }
            };
        default:
            return state;
    }
};
export default loginReducer;









