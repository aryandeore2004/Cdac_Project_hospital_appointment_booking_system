import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointment from "./pages/patient/BookAppointment";
import AppointmentConfirmation from "./pages/patient/AppointmentConfirmation";
import MyAppointments from "./pages/patient/MyAppointments";
import QueueStatus from "./pages/patient/QueueStatus";

import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import MySchedule from "./pages/doctor/MySchedule";
import DoctorQueue from "./pages/doctor/DoctorQueue";
import Consultation from "./pages/doctor/Consultation";

import ReceptionistDashboard from "./pages/receptionist/ReceptionistDashboard";
import WalkIn from "./pages/receptionist/WalkIn";
import CheckIn from "./pages/receptionist/CheckIn";
import ManageQueue from "./pages/receptionist/ManageQueue";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageDoctors from "./pages/admin/ManageDoctors";
import AddDoctor from "./pages/admin/AddDoctor";
import Departments from "./pages/admin/Departments";
import ManageReceptionists from "./pages/admin/ManageReceptionists";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute role="PATIENT" />}>
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/book" element={<BookAppointment />} />
        <Route
          path="/patient/confirmation"
          element={<AppointmentConfirmation />}
        />
        <Route path="/patient/appointments" element={<MyAppointments />} />
        <Route path="/patient/queue" element={<QueueStatus />} />
      </Route>

      <Route element={<ProtectedRoute role="DOCTOR" />}>
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/schedule" element={<MySchedule />} />
        <Route path="/doctor/queue" element={<DoctorQueue />} />
        <Route path="/doctor/consultation" element={<Consultation />} />
      </Route>

      <Route element={<ProtectedRoute role="RECEPTIONIST" />}>
        <Route
          path="/receptionist/dashboard"
          element={<ReceptionistDashboard />}
        />
        <Route path="/receptionist/walk-in" element={<WalkIn />} />
        <Route path="/receptionist/check-in" element={<CheckIn />} />
        <Route path="/receptionist/queue" element={<ManageQueue />} />
      </Route>

      <Route element={<ProtectedRoute role="ADMIN" />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/doctors" element={<ManageDoctors />} />
        <Route path="/admin/doctors/add" element={<AddDoctor />} />
        <Route path="/admin/departments" element={<Departments />} />
        <Route path="/admin/receptionists" element={<ManageReceptionists />} />
      </Route>
    </Routes>
  );
}
