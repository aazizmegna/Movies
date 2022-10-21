import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sinup from './components/Sinup';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Sinup />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
