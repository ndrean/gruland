import history from "./history.js";
import React from "react";
import vstore from "./github.js";

const navLinks = [
  { path: "/", title: "Home" },
  { path: "/:detail", title: "Detail" },
];
const Link = ({ path, title, handler }) => (
  <h1 className="text-4xl m-2">
    <a href={path} onClick={handler}>
      {title}
    </a>
  </h1>
);

const NavBar = ({ store, children }) => {
  function handleNav(e) {
    e.preventDefault();
    history.push({ pathname: e.target.pathname });
  }

  return (
    <div>
      <nav className="flex flex-row">
        {navLinks.map(({ path, title }) => (
          <Link key={title} path={path} title={title} handler={handleNav} />
        ))}
      </nav>
      {children}
    </div>
  );
};

export default NavBar;
