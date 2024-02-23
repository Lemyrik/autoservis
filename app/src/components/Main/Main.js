import React from "react";
import { Layout } from "antd";
import "./Main.css";
import Logo from "../Logo/Logo";
import Image from "../Image/Image";
import { Outlet } from "react-router-dom";
import { FOOTER_IMAGES_PATHS } from "../../constants/common/constants";
import Filter from "../Filter/Filter";

const { Header, Content, Footer } = Layout;
function Main() {
  return (
    <>
      <Header className="header">
        <Logo />
        <Filter />
      </Header>
      <Content className="content">
        <Outlet />
      </Content>
      <Footer className="footer">
        <div className="footer_container">
          {FOOTER_IMAGES_PATHS.map((link) => (
            <Image key={link} link={link} />
          ))}
        </div>
      </Footer>
    </>
  );
}
export default Main;
