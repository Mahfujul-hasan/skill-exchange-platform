import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ProfileLayout from "../layouts/ProfileLayout";
import SkillDetails from "../pages/skillDetails/SkillDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import PrivateRouter from "../Context/PrivateRouter";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/my_profile",
        Component: ProfileLayout,
      },
      {
        path: "/skill_details/:id",
        element:<PrivateRouter><SkillDetails></SkillDetails></PrivateRouter>
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: Signup,
      },
      {
        path: "/auth/forget_password",
        Component: ForgetPassword,
      }
    ],
    
  },
  {
    path:'/*',
    element:<ErrorPage></ErrorPage>
  }
]);
