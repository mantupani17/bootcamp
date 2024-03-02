import { createContext, useEffect, useState } from "react"
import { getProfileError, getProfileStatus, selectProfile } from './../redux-mgmt/profile-reducer'
import { useAppSelector } from './../redux-mgmt/hooks';
export const AuthContext = createContext('user')

const AuthContextProvider  = ({children}) => {
    const [ user, setUser ] = useState(null)
    const profile = useAppSelector(selectProfile);
    const status = useAppSelector(getProfileStatus);
    const error = useAppSelector(getProfileError);
    useEffect(()=>{
        if (status == 'succeeded') {
            setUser(profile)
        } else if (status == 'loading') {
            console.log('Loading')
        } else {
            console.log(error)
        }
    },[status])
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const withAuthContext = (Child) => (props) => (
    <AuthContext.Consumer>
        {(context)=> <Child {...props} {...context}/>}
    </AuthContext.Consumer>
)

export { AuthContextProvider, withAuthContext };

// https://youtu.be/9zySeP5vH9c