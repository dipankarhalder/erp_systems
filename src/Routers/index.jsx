import { createBrowserRouter } from "react-router-dom";
import { appPath } from "../constant";
import {
  AuthLayout,
  MainLayout,
  ErrorPage,
  LoginPage,
  RegisterPage,
  ForgotPage,
  OtpPage,
  DashboardPage,
} from "../Pages";

export const router = createBrowserRouter([
  {
    path: appPath.LOGIN,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: appPath.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: appPath.OTP,
        element: <OtpPage />,
      },
      {
        path: appPath.FORGOT,
        element: <ForgotPage />,
      },
    ],
  },
  {
    path: appPath.APPS,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
]);
