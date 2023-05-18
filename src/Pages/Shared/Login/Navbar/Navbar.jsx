import logo from '../../../../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar navbar-style bg-slate-800 font-serif text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>Home</li>
            <li>All Toys</li>
            <li>Blogs</li>
          </ul>
        </div>
        <a  className="btn btn-ghost normal-case text-xl"> <img className=' h-14 w-15' src={logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>All Toys</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary bg-[#EE4264]">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
