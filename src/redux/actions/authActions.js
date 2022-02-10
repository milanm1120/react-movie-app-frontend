export const SignUp = (credentials) => {
    const {name, email, password} = credentials     //destructuring name, email, password out of credentials
    return(dispatch, getState)=>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: {name, email, password}})
        }
    }
}