import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const ReactRouter = () => {
  const Home = () => {
    return <h1>This is the new Home page.</h1>;
  };

  const About = () => {
    return <h1>This is the new About Page.</h1>;
  };

  const Error = () => {
    return <h1>This is the new Error Page.</h1>;
  };

  const Layout = () => {
    return (
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Outlet />
      </ul>
    );
  };

  return (
    <Router>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export { ReactRouter };
