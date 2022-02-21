export default function userReducer(state = {users: []}, action) {
    switch (action.type) {
        case 'FETCH_USERS':
            return {accounts: action.payload}
        case 'ADD_USER':
            return {...state,
                auth: true,
                users: [...state.users, action.payload]}
        default:
            return state;                //prevents the return of null or undefined
    }
}