import LogoutNavBar from './LogoutNavBar';
import '../stylesheets/Header.css'


const Header = () => {
    const react_token = localStorage.getItem("react_token")
          
    return (
        <div className = 'displayheader'>
            <LogoutNavBar />
              <br/>
            <div className= 'header-container'>
                <h1>Welcome To Everyone's A Critic</h1>
            </div>
        </div> 
    )
}

export default Header;
