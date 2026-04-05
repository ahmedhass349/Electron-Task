import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/Dashboard";
import MyWork from "./pages/MyWork";
import Teams from "./pages/Teams";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import AIChat from "./pages/AIChat";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPasswordEmailMessage from "./pages/ResetPasswordEmailMessage";
import ResetPassword from "./pages/ResetPassword";
import ErrorBoundary from "./components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/reset-password-sent",
    element: <ResetPasswordEmailMessage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/my-work",
    element: <MyWork />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/teams",
    element: <Teams />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/messages",
    element: <Messages />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/ai-chat",
    element: <AIChat />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/settings",
    element: <Settings />,
    errorElement: <ErrorBoundary />,
  },
]);