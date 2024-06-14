import { Outlet } from "react-router-dom";
import AppLayout from "../components/Layout";

const ProfilePage = () => (
  <div>
    <AppLayout>
      <h1>Profile Page</h1>
      <Outlet />
    </AppLayout>
  </div>
);

export default ProfilePage;
