export const signUp = (credentials) => {

    const url = ('http://localhost:3000/api/v1/')
    const {name, email, password} = credentials     //destructuring name, email, password out of credentials
    return(dispatch)=>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: {name, email, password}})
        }
        fetch(url + 'registration', requestOptions)
            .then(r => r.json())
            .then(data => {
                console.log("res data: ", data)
                if (data.error) {
                    dispatch({type: 'SIGNUP_ERROR', err: data.error.message})
                }
                else {
                    dispatch({type: 'SIGNUP_SUCCESS'})
                }
                
                })
            .catch(error => {
                console.log(error.message)
                dispatch({type: 'SIGNUP_ERROR', err: error.message})
            })
    } 
}