import { Link } from "react-router-dom";
import LoginForm from "../components/Login";
import { signInWithEmailAndPassword } from "../config/firebase";

const LoginPage = () => {
  const loginUser = () => {};
  return (
    <div className="container">
      <div className="row justify-content-center p-5">
        <div className="col-6 p-5">
          <LoginForm loginUser={loginUser} />
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
