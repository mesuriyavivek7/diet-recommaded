import "./App.css";

import './App.css';

import HomeSet from './pages/home/HomeSet';

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/login/Login";
import SignUpForm from "./components/form/SignUpForm";
import UserProfile from "./pages/profile/UserProfile";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeSet></HomeSet>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<SignUpForm></SignUpForm>}></Route>
            <Route path="/profile" element={<UserProfile></UserProfile>}></Route>
          </Routes>
       </BrowserRouter>
      
    </div>
  );
}

export default App;