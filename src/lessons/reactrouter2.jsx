import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const ReactRouter2 = () => {
  const Home2 = () => {
    return <h1>This is the Home2 Page</h1>;
  };

  const About2 = () => {
    return <h1>This is the About2 Page</h1>;
  };

  const Contact2 = () => {
    return <h1>This is the Contact2 Page</h1>;
  };

  const Help2 = () => {
    return <h1>This is the Help2 Page</h1>;
  };

  const Error2 = () => {
    return <h1>This is the Error2 Page</h1>;
  };

  const Layout2 = () => {
    return (
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about2">
          <li>About</li>
        </Link>
        <Link to="/contact2">
          <li>Contact</li>
        </Link>
        <Link to="/help2">
          <li>Help</li>
        </Link>
        <Outlet />
      </ul>
    );
  };

  return (
    <Router>
      <Layout2 />
      <Routes>
        <Route exact path="/" element={<Home2 />} />
        <Route exact path="/about2" element={<About2 />} />
        <Route exact path="/contact2" element={<Contact2 />} />
        <Route exact path="/help2" element={<Help2 />} />
        <Route exact path="*" element={<Error2 />} />
      </Routes>
    </Router>
  );
};

export { ReactRouter2 };
