import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Landing from "../pages";
import SignUp from "../pages/authScreens/signUp";
import Jobs from "../pages/jobs";
import Apply from "../pages/apply";
import RecruiterJobs from "../pages/recruiter/jobs";
import CreateJob from "../pages/recruiter/createJob";
import Login from "../pages/authScreens/login";
import Verify from "../pages/authScreens/verify";
import CreatePassword from "../pages/authScreens/confirmPassword";
import CompaniesJob from "../pages/companiesJob";
import Profile from "../pages/recruiter/profile";
import JobDetails from "../components/jobDetails";
import JobResult from "../pages/recruiter/jobResult";
import ViewCandidate from "../pages/recruiter/viewCandidate";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-user" element={<Verify />} />
      <Route path="/create-password" element={<CreatePassword />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/apply/:id" element={<Apply />} />
      <Route path="/jobs/:company/:id" element={<CompaniesJob />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<RecruiterJobs />} />
        <Route path="/dashboard/create-job" element={<CreateJob />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/job_result/:id" element={<JobResult />} />
        <Route path="/dashboard/view_candidate/:id" element={<ViewCandidate />} />
      </Route>
    </Routes>
  );
};

const ProtectedRoute = () => {
  const user = localStorage.getItem("recruitnToken");
  return user ? <Outlet /> : <Navigate to="/login" />;
};
