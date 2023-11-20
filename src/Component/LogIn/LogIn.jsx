import { Link } from "react-router-dom";
import "./Login.css";
const LogIn = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Please Login</h2>
      <form>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
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
