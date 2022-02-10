export const SignUp = (credentials) => {
    const {name, email, password} = credentials     //destructuring name, email, password out of credentials
    return(dispatch, getState)=>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: {name, email, password}})
        }
        fetch(url + 'registration', requestOptions)
            .then(r => r.json())
            .then(data => {
                console.log("res data: ", data)
                dispatch({type: 'SIGNUP_SUCCESS'})
                })
            .catch(error => {
                console.log(error.message)
                dispatch({type: 'SIGNUP_ERROR', err: error.message})
            })
    } 
}