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
                {/* User: {react_user_name} */}
            </div>
            { react_token && react_token != 'undefined' ?   
                <button className='logout-btn' onClick={handleLogout}>LOGOUT </button>
                : ''}
        </nav>
      </div>
    )
  }

export default LogoutNavBar;