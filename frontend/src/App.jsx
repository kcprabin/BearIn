import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./components/Router";
import Authentication from "./auth/Authentication";

function App() {
  return (<Authentication>
  <RouterProvider router={Router} />;
  </Authentication>
)}

export default App;
