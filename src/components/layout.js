import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  heading,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ui className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" clasName={navLinkText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" clasName={navLinkText}>
              About
            </Link>
          </li>
        </ui>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
