import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
const App = () => {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
