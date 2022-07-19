import React from "react";

const Footer = () => {
  return (
    <>
      <Footer>
        <div className="container">
          <span>
            Copyright &copy; {`${new Date().getFullYear()}`}{" "}
            <span className="font-weight-semibold"></span> All
            rights reserved.
          </span>
          <div className="right-footer">
            <a href="" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
            <a href="" target="_blank" rel="noreferrer">
              Term of Service
            </a>
            <a href="" target="_blank" rel="noreferrer">
              Legal info
            </a>
          </div>
        </div>
      </Footer>
    </>
  );
};
export default Footer;
