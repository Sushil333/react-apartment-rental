import { lazy } from "react";

// layouts
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Listings = lazy(() => import("./pages/Listings"));
// ----------------------------------------------------------------------

const routes = (userInfo) => [
  { path: "", element: <Listings /> },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
];

export default routes;
