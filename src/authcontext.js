import React,{Children, useContext} from 'react'

const AuthContext = React.createContext()

export function AuthProvider(){
    return(
        <AuthContext.Provider value={value}>
            {Children}
        </AuthContext.Provider>
    )
}

export function useAuthValue(){
    return useContext(AuthContext)
}