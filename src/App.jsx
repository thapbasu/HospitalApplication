import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Tests from './pages/Tests';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import FindDoctor from './pages/FindDoctor';
import DoctorDetails from './pages/DoctorDetails';
import AdminHome from './pages/Admin/AdminHome';
import AdminPageNotFound from './pages/Admin/AdminPageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/find-doctor" element={<FindDoctor />} exact />
        <Route path="/doctor-details" element={<DoctorDetails />} exact />
        <Route path="/tests" element={<Tests />} exact />
        {/* admin routing */}
        <Route path="/admin" element={<AdminHome />} exact />

        <Route path="/*" element={<PageNotFound />} exact />
        <Route path="/admin/*" element={<AdminPageNotFound />} exact />
      </Routes>
    </>
  );
}

export default App;
