import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./Main/Home"
import Login from "./Main/Login"
import "./home.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
      
    </>
  );
}

export default App;
