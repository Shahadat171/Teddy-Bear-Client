
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    
  };
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
                      <Link className="btn btn-link">Sign Up</Link>
                    </small>
                  </p>
                  <input
                    type="submit"
                    value="login"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
