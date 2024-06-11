import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, ProfilePage, SignupPage } from "../pages";

function AppRouter() {
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
