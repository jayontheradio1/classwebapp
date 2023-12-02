import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/protectedroute';
import Welcome from './Welcome Page/welcome';
import Login from './Login Page/login';
import Messaging from './Messaging Module/messaging';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Welcome />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/home" element={
          <ProtectedRoute>
            <Messaging />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
