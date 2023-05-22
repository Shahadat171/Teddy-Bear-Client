import { useContext } from "react";
import google from '../../../assets/google.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {
  const { signIn,googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  console.log(from)

  const handleLogin = (event) => {
    event.preventDefault();
    // setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from , {replace : true})
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLogin =()=>{
    googleSignIn()
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from , {replace : true})
    })
    .catch(error =>{
        console.error(error.message)
    })
  }

  return (
    <div>
      <div
        style={{
          placeItems: "start",
          paddingLeft: "39%",
          paddingTop: "4%",
          paddingBottom: "3%",
        }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold">Please Login</h1>
          </div>
          <div
            style={{ minWidth: "400px" }}
            className="card flex-shrink-0 shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-2">
                  <p className="ml-2 mb-2">
                    <small className="mb-2">
                      New to teddyville?
                      <Link to='/signup' className="btn btn-link">Sign Up</Link>
                    </small>
                  </p>
                  <input
                    type="submit"
                    value="login"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <div className='text-center mt-3'>
                  <p className="text-center mb-2"><small>Or sign up using</small></p>
                  <button onClick={handleGoogleLogin} className='mx-auto'><img className='mx-auto' src={google} alt="" /></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
