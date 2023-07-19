import Login from "./Login";
import LogoBox from "./LogoBox";
import Navigation from "./Navigation";
import Search from "./Search";

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <LogoBox/>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Navigation/>
            <Search />
            <Login/>
          </div>
        </div>
      </nav>
    )
}
export default Navbar;