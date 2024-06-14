import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import logo from "../assets/images/logo.webp";
import { signOut, auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("logout");
      })
      .catch(() => {});
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical text-center p-3">
          <img src={logo} alt="" width={"60%"} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "About",
            },
            {
              key: "3",
              icon: <UserOutlined />,
              label: "Users",
              onClick: () => navigate("/users"),
            },
            {
              key: "4",
              icon: <LogoutOutlined />,
              label: "Logout",
              onClick: () => logoutUser(),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
