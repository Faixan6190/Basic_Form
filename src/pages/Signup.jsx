import { Link } from "react-router-dom";
import SignupForm from "../components/Signup";
import { auth, createUserWithEmailAndPassword } from "../config/firebase";

const SignupPage = () => {
  const registerUser = (values) => {
    createUserWithEmailAndPassword(auth, `${values.username}@example.com`, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center p-5">
        <div className="col-24 col-md-18 col-lg-8 p-5">
          <SignupForm registerUser={registerUser} />
          Already have an account? <Link to={"/"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
