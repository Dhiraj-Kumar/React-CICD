import Header from "./Header"
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile"
import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import Users from "./Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
