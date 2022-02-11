export const addUser = (data) => {
    // debugger;
    return (dispatch) => {      //because of thunk we can bring dispatch into this addUser action
        fetch('http://localhost:3000/api/v1/users')
        
    }                       
}