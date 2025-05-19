import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

// Import SCSS
import "./theme.scss";

// Import Icon CSS
import "./assets/css/materialdesignicons.min.css";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {routes.map((route, idx) => (
          <Route path={route.path} element={<route.component />} key={idx} />
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default App;