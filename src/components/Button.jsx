import { Button } from "antd";
import { useContext } from "react";
import User from "../context/UserContext";

const AppButton = ({ title, obj }) => {
  const user = useContext(User);
  console.log("user", user);
  return (
    <Button onClick={() => user.setUser({ email: "sheikh@gmail.com", name: "Sheikh" })} type="primary">
      {title}
    </Button>
  );
};
export default AppButton;
