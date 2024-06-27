import {Link} from "react-router-dom";
import logo from "../assets/images/logo.svg";


const Header = () => {
    return (
        <>
           <header className="py-6 mb-12 border-b">
               <div className="container flex justify-between items-center">
                   <Link to="/">
                       <img src={logo} alt="logo"/>
                   </Link>

               {/*buttons*/}
                   <div className="flex items-center gap-6">
                       <Link className="hover:text-violet-900 transition" to="/login">Login</Link>
                       <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" to="/signin">Sign up</Link>
                   </div>
               </div>
           </header>

        </>
    );
};

export default Header;