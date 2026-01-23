import React from "react";
import {
  ADMINDASHBOARD,
  ADMINLOGIN,
  EMPLOYEEDASHBOARD,
  EMPLOYEELOGIN,
  FORGETPASSWORD,
  POLICIES,
} from "./RouterUrl";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminDashboard from "../../pages/Admin/AdminDashboard";
import Policies from "../../pages/Admin/Policies";
import Layout from "../Layout/Layout";
import EmployeeDashboard from "../../pages/Employee/EmployeeDashboard";
import AdminLogin from "../../pages/Admin/Auth/AdminLogin";
import EmployeeLogin from "../../pages/Employee/Auth/EmployeeLogin";
import ForgotPassword from "../../pages/Admin/Auth/ForgotPassword";

// public routes
const publicRoutes = [
  // admin login
  {
    path: ADMINLOGIN,
    Component: AdminLogin,
  },

  // reset passwrord
  {
    path: FORGETPASSWORD,
    Component: ForgotPassword,
  },

  // employee login
  {
    path: EMPLOYEELOGIN,
    Component: EmployeeLogin,
  },
];

// protected routes (now just normal routes)
const protectedRoutes = [
  // admin dashboard
  {
    path: ADMINDASHBOARD,
    Component: AdminDashboard,
  },

  // employee dashboard
  {
    path: EMPLOYEEDASHBOARD,
    Component: EmployeeDashboard,
  },

  // policies page
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
    element: <Navigate to={EMPLOYEELOGIN} replace />,
  },

  // Public routes → NO protection
  ...publicRoutes.map(({ path, Component }) => ({
    path,
    element: <Component />,
  })),

  // Protected routes → now just wrapped with Layout, no auth check
  ...protectedRoutes.map(({ path, Component }) => ({
    path,
    element: (
      <Layout>
        <Component />
      </Layout>
    ),
  })),

  // Catch-all → redirect relevant routes to their login based on URL
  {
    path: "*",
    element: (() => {
      const currentPath = window.location.pathname;

      // If URL contains 'admin', redirect to admin login
      if (currentPath.includes("/admin")) {
        return <Navigate to={ADMINLOGIN} replace />;
      }

      // Otherwise redirect to employee login
      return <Navigate to={EMPLOYEELOGIN} replace />;
    })(),
  },
];

const Routes = createBrowserRouter(routeConfig);

export default Routes;
