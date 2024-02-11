import './App.css';
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from "./pages/Profile";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() 
{

  let navigate=useNavigate()
  console.log(window.location.pathname)
  let {user,msg}=useSelector(state=>state.User)
  const notify = (msg) => toast(msg);
  

  useEffect(()=>
  {
      if (user) {
        if (
          window.location.pathname === "/login" ||
          window.location.pathname === "/signup"
        ) {
          navigate("/")
        }
      }
  },[user])


  useEffect(()=>
  {
      if(msg.length>0)
      {
        notify(msg);
      }
  },[msg])


  return (
    <div className="App h-screen w-[100vw] overflow-x-hidden bg-slate-200">
      <ToastContainer />
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}


export default App;