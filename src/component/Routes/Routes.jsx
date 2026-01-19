import React from "react";
import Login from "../../pages/auth/Login";
import { DASHBOARD, EMPLOYEEDASHBOARD, LOGIN, POLICIES } from "./RouterUrl";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminDashboard from "../../pages/Admin/Dashboard";
import EmployeeDashboard from "../../pages/Admin/Employee";
import Policies from "../../pages/Admin/Policies";
import Layout from "../Layout/Layout";

// public routes
const publicRoutes = [
  {
    path: LOGIN,
    Component: Login,
  },
];

// protected routes (now just normal routes)
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

  // Protected routes → now just wrapped with Layout, no auth check
  ...protectedRoutes.map(({ path, Component }) => ({
    path,
    element: (
      <Layout>
        <Component />
      </Layout>
    ),
  })),

  // Catch-all → redirect unknown routes to login
  {
    path: "*",
    element: <Navigate to={LOGIN} replace />,
  },
];

const Routes = createBrowserRouter(routeConfig);

export default Routes;
