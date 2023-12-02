import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome Page/welcome';
import Login from './Login Page/login';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Welcome />} exact />
          <Route path="/login" element={<Login />} exact />
      </Routes>
    </Router>
  );
}

export default App;
