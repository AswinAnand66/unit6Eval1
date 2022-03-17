import {Link} from "react-router-dom"
import "./Styles/Nav.css"

const links = [

  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
       <nav className="navbar">
         <ul>
           <li>
            <Link id="header-link-about" to="/">Home</Link>
           
           </li>
           <li>
            <Link id="header-link-about" to="/about">About</Link>
           
           </li>
           <li>
            <Link id="header-link-movies" to="/movies">Movies</Link>
           
           </li>
         </ul>
       </nav>

   
    //map through the link ad display it in header
    
  )
};
