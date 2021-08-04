import {LOGOUT, LOGIN,  LoginAction} from '../actions/authAction'

const initialState = {
    login: '',
    token: '',
    name: ''
}

export const authReducer = (state = initialState, action: LoginAction) => {
    switch (action.type) {
        case LOGIN: {
            const {login,token,name} = action
            return {...state, login, token, name};
        }
        case LOGOUT: {
            return {...state, login:'', token:'', name:''};
        }
        default: {
            return state
        }
    }
}