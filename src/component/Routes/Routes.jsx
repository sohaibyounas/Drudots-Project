import React from "react";
import Login from "../../pages/auth/Login";
import {
  DASHBOARD,
  EMPLOYEEDASHBOARD,
  FORGETPASSWORD,
  LOGIN,
  OTP_ROUTE,
  POLICIES,
} from "./RouterUrl";
import OTP from "../../pages/auth/Otp";
import ForgotPassword from "../../pages/auth/ForgetPassword";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminDashboard from "../../pages/Admin/Dashboard";
import EmployeeDashboard from "../../pages/Admin/Employee";
import Policies from "../../pages/Admin/Policies";
import Layout from "../Layout/Layout";

// Protected Routes
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

// public routes
const PublicRoute = ({ children }) => {
  return !isAuthenticated() ? children : <Navigate to="/employee" />;
};

// public routes
const publicRoutes = [
  {
    path: LOGIN,
    Component: Login,
  },
  {
    path: OTP_ROUTE,
    Component: OTP,
  },
  {
    path: FORGETPASSWORD,
    Component: ForgotPassword,
  },
];

// authentication check function
const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

// protected routes
const protectedRoutes = [
  {
    path: DASHBOARD,
    Component: AdminDashboard,
  },
  {
    path: EMPLOYEEDASHBOARD,
    Component: EmployeeDashboard,
  },
  {
    path: POLICIES,
    Component: Policies,
  },
];

// routes config
const routeConfig = [
  // Default route → redirect to login
  {
    path: "/",
    element: <Navigate to={LOGIN} replace />,
  },

  // Public routes → NO protection
  ...publicRoutes.map(({ path, Component }) => ({
    path,
    element: <Component />,
  })),

  // Protected routes → wrapped with ProtectedRoute
  ...protectedRoutes.map(({ path, Component }) => ({
    path,
    element: (
      <ProtectedRoute>
        <Layout>
          <Component />
        </Layout>
      </ProtectedRoute>
    ),
  })),

  // Catch-all → redirect unknown routes to login
  {
    path: "*",
    element: <Navigate to={LOGIN} replace />,
  },
];

const Routes = createBrowserRouter(routeConfig.map((route) => ({ ...route })));

export default Routes;
