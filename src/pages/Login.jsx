import { Link } from "react-router-dom";
import LoginForm from "../components/Login";
import { signInWithEmailAndPassword, auth } from "../config/firebase";

const LoginPage = () => {
  const loginUser = (values) => {
    console.log("values", values);
    // createUserWithEmailAndPassword(auth, `${values.username}@example.com`, values.password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log("user", user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log("errorMessage", errorMessage);
    //   });
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
