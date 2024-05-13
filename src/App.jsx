import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./pages/AuthPage/Registration/Signup";
import { Signin } from "./pages/AuthPage/Login/Signin";
import { NotFound } from "./pages/NotFound/NotFound"
import { CardPage } from "./pages/CardPage/CardPage";
import { Layout } from "./Layout";
import PrivateRoute from "./PrivateRoute"
import PopUser from "./pages/Exit/ExitPage";
import PopNewCard from "./modal/PopNewCard/PopNewCard";



function App() {
 
  return (
    <Routes>
      <Route path="/login" element={<Signin/>} />

      <Route path="/registr" element={<Signup />} />

      <Route element={<PrivateRoute/>}>
      <Route path="/" element={<Layout/>}>
      <Route path="card/:id" element={<CardPage/>} />
      <Route path="/cardnew" element={<PopNewCard/>} />
      <Route path="/exit" element={<PopUser/>} />
      </Route>
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
