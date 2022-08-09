import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Auth/*" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
