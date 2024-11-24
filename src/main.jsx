import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthContext from "./Components/Provider/AuthContext.jsx";
import router from "./Components/Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>
);
