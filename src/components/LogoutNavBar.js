import '../stylesheets/Header.css'

const LogoutNavBar = () => {

  const handleLogout = () => {
    console.log('header test logout')
    localStorage.removeItem("react_token");
    window.location.reload(false);
  }

    
      const react_token = localStorage.getItem("react_token")
      const react_user_name = localStorage.getItem("react_user_name")

    return (
      <div className='LogoutNavBar'>
        <nav>
            <br/>
            <div className ='userName'>
            </div>
            { react_token && react_token != 'undefined' ?   
                <button className='logout-btn' onClick={handleLogout}>LOGOUT {react_user_name}</button>
                : ''}
        </nav>
      </div>
    )
  }

export default LogoutNavBar;