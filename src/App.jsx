import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import PrivateRoute from "./components/PrivateRoute";

function Login() 
{
  const login = () => 
  {
    localStorage.setItem("auth", "true");
    window.location.href = "/";
  };
  return 
  (
    <div className="container mt-5">
      <h2>Sign In</h2>
      <button className="btn btn-primary" onClick={login}>Sign In</button>
    </div>
  );
}
export default function App() 
{
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductList />}/>
        <Route path="/add" element={<ProductForm />}/>
      </Routes>
    </>
  );
}
