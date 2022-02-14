export const addUser = (data) => {
    // debugger;
    return (dispatch) => {      //because of thunk we can bring dispatch into this addUser action
        fetch('http://localhost:3000/api/v1/registration', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',             //Default method for a fetch request is a 'GET' anything different you have to explicitly declare
            body: JSON.stringify(data)  //stringifying the data being sent down from the body
        })
        .then(r => r.json())
        .then(user => dispatch({type: 'ADD_USER', payload: user}))
    }                       
}