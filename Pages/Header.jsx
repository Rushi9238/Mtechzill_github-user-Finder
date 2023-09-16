
import { Link, NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai"

const Header = () => {
 
  //! Mobile Menu Functions
  const mobileMenu = () => { document.querySelector('#mobile-menu').classList.toggle('hidden') }
  const mobileMenuClose = () => { document.querySelector('#mobile-menu').classList.add('hidden') }

  return (
    <header className={`flex justify-between bg-slate-800 items-center p-5 px-4 md:px-40`}>
      {/* Logo */}
      <div className="logo text-2xl flex items-center">
        <Link to={"/"}>
          <BsGithub className="text-2xl md:text-3xl text-white" />
        </Link>
        <h1 className="mx-3 text-xl md:text-2xl text-white">
          <Link to={"/"}>Github Profile Finder</Link>
        </h1>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex md:items-center ">
        <ul className="flex text-sm md:text-xl text-white">
          <li className="mx-3 border-b-2 border-white/[0]  hover:border-white/[100] ">
            <NavLink to="/" className={(navData) => navData.isActive ? "text-orange-400" : ""}>
              Home
            </NavLink>
          </li>
          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100] ">
            <NavLink to="/myprofile" className={(navData) => navData.isActive ? "text-orange-400" : ""}>
              My Profile
            </NavLink>
          </li>
          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100] ">
            <NavLink to="/404" className={(navData) => navData.isActive ? "text-orange-400" : ""}>
              404 Page
            </NavLink>
          </li>
        </ul>
       
      </nav>

      {/* Mobile Right Bar */}
      <div className="md:hidden flex mr-2">
      
        {/* Mobile Hamburger Btn */}
        <button onClick={mobileMenu} className=" md:hidden">
          <AiOutlineMenu className="text-3xl text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul id="mobile-menu" className={`hidden md:hidden absolute z-10 top-16 left-0  bg-slate-800  w-full flex text-white flex-col items-center`}>
        <li onClick={mobileMenuClose} className="p-3">
          <NavLink to="/" className={(navData) => navData.isActive ? "text-orange-400" : ""}>
            Home
          </NavLink>
        </li>
        <li onClick={mobileMenuClose} className="p-3">
          <NavLink to="/myprofile" className={(navData) => navData.isActive ? "text-orange-400" : ""}>
            My Profile
          </NavLink>
        </li>
        <li onClick={mobileMenuClose} className="p-3">
          <NavLink to="/404" className={(navData) => navData.isActive ? "text-orange-400" : ""}>
            404 Page
          </NavLink>
        </li>
      </ul>
     
    </header>
    
  );
};

export default Header;