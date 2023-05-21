import { useContext } from 'react';
import logo from '../../../../assets/logo.png'
import './Navbar.css'
import { AuthContext } from '../../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/alltoys'>All Toys</Link>
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      {user && (
                <div className=" font-sans flex">
                  <div>
                    <Link to='addtoys' className='mx-2'>Add a Toy</Link>
                    <Link to='/mytoy' className='mr-4 ml-2'>My Toy</Link>
                    </div>
                    <div>
                    <Tooltip title={user.displayName}>
                  <span>
                    <img className="mr-4 h-8 w-8 rounded-full" src={user.photoURL} />
                  </span>
                  </Tooltip>
                  </div>
                </div>
              )}
               {user ? (
                <button
                  onClick={handleLogOut}
                  type="button"
                  className="btn btn-dark ms-0"
                >
                  Log Out
                </button>
              ) : (
                <Link className="text-light" to="login">
                  {" "}
                  <button type="button" className="btn btn-dark ms-0">
                    {" "}
                    Login{" "}
                  </button>{" "}
                </Link>
              )}
      </div>
    </div>
  );
};

export default Navbar;
