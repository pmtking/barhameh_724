import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/main";
import Home from "../pages/home";
import { RouterProvider } from "react-router-dom";
import Login from "../pages/auth/login";
import DashBoardLayouts from "../layouts/dashboard";
import IndexDashboard from "../pages/dashboard/home";
import Blog from "../pages/blog/page";
import OtpPage from "../pages/auth/otp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true, // Setting index for default route
        element: <Home />,
      },
      {
        path: "/blog",
        // Setting index for default route
        element: <Blog />,
      },
      {
        path: "/aboutus",
        // Setting index for default route
        element: <Blog />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/otp",
    element: <OtpPage />,
  },
  {
    path: "/dashboard",
    element: <DashBoardLayouts />,
    children: [
      {
        index: true, // Setting index route for dashboard
        element: <IndexDashboard />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
