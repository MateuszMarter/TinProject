import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightList from './Core/js/flightList';
import Login from './User/js/userLogin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightList/>} />
          <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
