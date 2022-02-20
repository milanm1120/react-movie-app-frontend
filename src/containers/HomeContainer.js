import LogoutNavBar from "../components/LogoutNavBar";
import Header from "../components/Header";
import Search from "../components/Search";
import MovieResults from "../components/MovieResults";

function LoginContainer() {
      

    return (
      <div id='displaylogin'>
          <div className= 'login-container' id='login-container'>
            <LogoutNavBar />
            <Header />
            <Search />
            <MovieResults />
          </div>
      </div>
    )
  }

export default LoginContainer;