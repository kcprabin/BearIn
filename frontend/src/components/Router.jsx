import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login"  element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Login/>}/>
    </Route>
  )
);

export default Router;
