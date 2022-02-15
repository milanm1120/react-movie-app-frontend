export const loginUser = (credentials) => {

    const url = ('http://localhost:3000/api/v1/sessions')
    const {name, email, password} = credentials     //destructuring name, email, password out of credentials
    console.log("123")
    return(dispatch)=>{
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: {name, email, password}})
        }
        fetch(url, requestOptions)
            .then(r => r.json())
            .then(data => {
                console.log("res data: ", data)
                dispatch({type: 'LOGIN_SUCCESS', payload: data})
                })
            .catch(error => {
                console.log(error.message)
                dispatch({type: 'LOGIN_ERROR', err: error.message})
            })
    } 
}