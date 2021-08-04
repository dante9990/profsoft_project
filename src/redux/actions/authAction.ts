export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

type Action = {
    type: string
}

export type LoginAction = {
    login: string,
    name: string
    token: string;
} & Action

interface LoginProps {
    login: string,
    name: string
    token: string;
}

export const loginAction = ({login, name, token}: LoginProps) => {
    return {
        type: LOGIN,
        name,
        login,
        token,
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT,
        login: '',
        token: '',
        name: ''
    }
}