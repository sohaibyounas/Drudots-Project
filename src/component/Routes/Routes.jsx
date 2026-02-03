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
import ForgotPassword from "../../pages/Employee/Auth/ForgotPassword";

// Protected Route Component
const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  if (!token) {
    return <Navigate to={allowedRole === "admin" ? ADMINLOGIN : EMPLOYEELOGIN} replace />;
  }

  if (userRole !== allowedRole) {
    return <Navigate to={userRole === "admin" ? ADMINDASHBOARD : EMPLOYEEDASHBOARD} replace />;
  }

  return <Layout>{children}</Layout>;
};

// Public Route Component
const PublicRoute = ({ children }) => {
  // const isAuthenticated = localStorage.getItem("data");
  // console.info("is aunthenticated", isAuthenticated);
  // const userRole = localStorage.getItem("userRole");

  // if (isAuthenticated) {
  //   return <Navigate to={userRole === "admin" ? ADMINDASHBOARD : EMPLOYEEDASHBOARD} replace />;
  // }

  return children;
};

// Smart 404 Redirect Component
// const NotFoundRedirect = () => {
//   const currentPath = window.location.pathname;
//   const isAuthenticated = localStorage.getItem("token");
//   const userRole = localStorage.getItem("userRole");

//   // Agar logged in hai
//   if (isAuthenticated) {
//     return <Navigate to={userRole === "admin" ? ADMINDASHBOARD : EMPLOYEEDASHBOARD} replace />;
//   }

//   // Agar logged out hai, path check karo
//   if (currentPath.includes("/admin")) {
//     return <Navigate to={ADMINLOGIN} replace />;
//   }

//   return <Navigate to={EMPLOYEELOGIN} replace />;
// };

const NotFoundRedirect = () => {
  return <Navigate to={EMPLOYEELOGIN} replace />;
};


// Routes config
const routeConfig = [
  {
    path: "/",
    element: <Navigate to={EMPLOYEELOGIN} replace />,
  },

  // Public routes

  // admin login
  {
    path: ADMINLOGIN,
    element: (
      <PublicRoute>
        <AdminLogin />
      </PublicRoute>
    ),
  },
  
  // forgot password
  {
    path: FORGETPASSWORD,
    element: (
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    ),
  },

  // employee login
  {
    path: EMPLOYEELOGIN,
    element: (
      <PublicRoute>
        <EmployeeLogin />
      </PublicRoute>
    ),
  },

  // Protected admin, policies routes
  // {
  //   path: ADMINDASHBOARD,
  //   element: (
  //     <ProtectedRoute allowedRole="admin">
  //       <AdminDashboard />
  //     </ProtectedRoute>
  //   ),
  // },

  // for test uses no authentication
  {
    path: ADMINDASHBOARD,
    element: <Layout><AdminDashboard /></Layout>,
  },

  // {
  //   path: POLICIES,
  //   element: (
  //     <ProtectedRoute allowedRole="admin">
  //       <Policies />
  //     </ProtectedRoute>
  //   ),
  // },

  // for test purpose no authentication
  {
    path: POLICIES,
    element: <Layout><Policies /></Layout>,
  },


  // Protected employee routes
  // {
  //   path: EMPLOYEEDASHBOARD,
  //   element: (
  //     <ProtectedRoute allowedRole="employee">
  //       <EmployeeDashboard />
  //     </ProtectedRoute>
  //   ),
  // },

  // for test uses
  {
    path: EMPLOYEEDASHBOARD,
    element: <Layout><EmployeeDashboard /></Layout>,
  },

  //  Smart catch-all with role-based redirect
  {
    path: "*",
    element: <NotFoundRedirect />,
  },
];

const Routes = createBrowserRouter(routeConfig);

export default Routes;