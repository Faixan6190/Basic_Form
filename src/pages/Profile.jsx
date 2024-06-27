import { Outlet } from "react-router-dom";
import AppLayout from "../components/Layout";
import AppCard from "../components/Card";
import { useState } from "react";

const ProfilePage = () => {
  const [obj, setObj] = useState({ name: "Faizan", age: 23 });

  return (
    <div>
      <AppLayout>
        <h1>Profile Page</h1>
        <AppCard obj={obj} />
        <Outlet />
      </AppLayout>
    </div>
  );
};

export default ProfilePage;
