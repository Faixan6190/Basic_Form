import { Link } from "react-router-dom";
import LoginForm from "../components/Login";
import { signInWithEmailAndPassword, auth } from "../config/firebase";

const LoginPage = () => {
  const loginUser = (values) => {
    signInWithEmailAndPassword(auth, `${values.username}@example.com`, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
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
