import "./styles.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Signout from "../pages/Signout";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import MyCart from "../pages/MyCart";

const TopBarNavigation = () => {
  return (
    <div>
      <div>
        <nav className=" p-5 bg-slate-400 font-semibold text-white  ">
          <div className="flex gap-5 justify-end">
            <Link to="/" className="navitem">
              Home
            </Link>
            <Link to="/products" className="navitem">
              Products
            </Link>
            <Link to="/about" className="navitem">
              About
            </Link>
            <Link to="/mycart" className="navitem">
              MyCart
            </Link>
            <Link to="/login" className="navitem">
              Login
            </Link>
            {/* <Link to="/signout" className="navitem">
              Logout
            </Link> */}
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home name="" />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </div>
  );
};

export default TopBarNavigation;
