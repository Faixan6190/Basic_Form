import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, ProfilePage, SignupPage } from "../pages";
import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "./firebase";

function AppRouter() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isUser ? <Navigate to={"/profile"} /> : <LoginPage />} />
        <Route path="/signup" element={isUser ? <Navigate to={"/profile"} /> : <SignupPage />} />
        <Route path="/profile" element={isUser ? <ProfilePage /> : <Navigate to={"/"} />} />
        <Route path="/profile" element={isUser ? <ProfilePage /> : <Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
