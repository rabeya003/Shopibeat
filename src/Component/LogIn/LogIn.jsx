import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthProvider } from "../../Context/AuthProviders";
import toast from "react-hot-toast";
const LogIn = () => {
  const [typePass, setPassword] = useState(true);
  const { signIn } = useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handletype = () => {
    setPassword(!typePass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User succesfully Loged");
        navigate(location?.state ? location?.state : "/");
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.massage);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Please Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={typePass ? "password" : "text"}
            name="password"
            required
          />
          <p>
            <small onClick={handletype}>Show password</small>
          </p>
        </div>
        <input className="btn-submit" value="Login" type="submit" />
        <p>
          <small>
            New here? <Link to="/signup">SignUP</Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
