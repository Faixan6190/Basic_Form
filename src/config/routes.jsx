import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, ProfilePage, Settings, SignupPage } from "../pages";
import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "./firebase";
import { Spin } from "antd";

function AppRouter() {
  const [isUser, setIsUser] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
      setLoader(false);
    });
  }, []);
  return (
    <>
      {loader ? (
        <div style={{ padding: "200px" }}>
          <Spin tip="Loading" size="Large">
            <div className="content" />
          </Spin>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isUser ? <Navigate to={"/profile"} /> : <LoginPage />} />
            <Route path="/signup" element={isUser ? <Navigate to={"/profile"} /> : <SignupPage />} />
            <Route path="/profile" element={isUser ? <ProfilePage /> : <Navigate to={"/"} />}>
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default AppRouter;
