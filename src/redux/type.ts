export type AuthState = {
    login:string,
    name:string,
    token:string
}

export type RootState = {
    auth: AuthState
}