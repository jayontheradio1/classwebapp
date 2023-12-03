import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/protectedroute';
import Welcome from './Welcome/welcome';
import Login from './Login Page/login';
import Messaging from './Messaging Module/messaging';
import Coursepage from './CoursePage/Coursepage';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';



const handleLogout = () => {
  localStorage.removeItem('token'); // or sessionStorage
  // Redirect to login or update the state
  window.location.reload();
};

function App() {
  return (
    
  <div>
      <div className="logout-container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
    <Router>
      <Routes>
          <Route path="/" element={<Welcome />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/home" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/coursepage/:courseName1/:professorName1" element={
          <ProtectedRoute>
            <Coursepage />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
