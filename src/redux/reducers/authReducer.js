const initState = {
    authError: null,
    isAuthenticated: false,
    user: {},
    message: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'LOGOUT':
        return{
          ...state,               //copying the current state 'immutably' by copying the existing state and updating the copy
          authError: null,
          isAuthenticated: false,
          user: {},
          message: action.payload
        }
  
        case 'LOGIN_SUCCESS':
          // console.log("Login Success: ", action.payload.token)   //passing the token data to the action
          localStorage.setItem('react_token', JSON.stringify(action.payload.token));    //storing the token in local storage
          localStorage.setItem('react_user_id', JSON.stringify(action.payload.user.id));
          localStorage.setItem('react_user_name', action.payload.user.name);
          window.location.reload(false);
        return{ 
          ...state,
          authError: null,
          isAuthenticated: true,
          token: action.payload.token     //storing the token value to the key token
        }
  
      case 'LOGIN_ERROR':
        // console.log('login fail')
        return{
          ...state,
          authentication: false,
          authError: action.err
        }
  
        case 'U_LOGIN_ERROR':
          return{
            ...state,
            authError: null
          }
     
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: action.payload,
                user: action.payload
            }
  
            case 'SIGNUP_SUCCESS':
                return{
                  ...state,
                  authError: null,
                  login_success: true,
                  message: "Your Registration is Successful! Please Sign in"
              }
            case 'SIGNUP_ERROR':
                  if( action.err){
                    return{
                      ...state,
                      authError: action.err
                  }
            }else{
                return{
                  ...state,
                  authError: "User Already Exist"
                }
              }

            default:
              return state
        }
}

export default authReducer;
