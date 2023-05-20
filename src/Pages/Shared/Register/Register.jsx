import { Link} from 'react-router-dom';
import google from '../../../assets/google.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const {createUser, googleSignIn} = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();
        // setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL)
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
            // profileUpdateData(createdUser, name, photoURL)
            // form.reset("")
        })
        .catch(error =>{
            console.error(error.message)
        })
    }
    const handleGoogleLogin =()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            // navigate(from , {replace : true}) 
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
            paddingLeft: "32%",
            paddingTop: "1%",
            paddingBottom: "4%",
          }}
          className="hero min-h-screen bg-base-200"
        >
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-center font-bold">Register now!</h1>
            </div>
            <div
              style={{ minWidth: "650px" }}
              className="card flex-shrink-0 shadow-2xl bg-base-100"
            >
              <div className="card-body">
               <form onSubmit={handleRegister}>
               <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    name="photoURL"
                    type="text"
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-2">
                  <p className='ml-2 mb-2'><small className='mb-2'>Already sign up?<Link to='/login' className='btn btn-link'>Login</Link></small></p>
                  <input type='submit' value='Register' className="btn btn-primary"/>
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

export default Register;