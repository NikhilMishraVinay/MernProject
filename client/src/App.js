//import logo from './logo.svg';
import Navbar  from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import {Signup} from './components/Singup'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
