import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, ProfilePage, SignupPage } from "../pages";
import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "./firebase";

function AppRouter() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
