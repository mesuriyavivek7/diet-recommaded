import "./App.css";

import './App.css';

import HomeSet from './pages/home/HomeSet';
import Footer from './components/footer/Footer';
import Cards from './components/cards/Cards';
import Navbar from './components/navbar/Navbar';
import SignUpForm from "./components/form/SignUpForm";
import AddProfile from "./components/form/AddProfile";


function App() {
  return (
    <div className="App">
        {/* <HomeSet></HomeSet> */}
        <AddProfile/>
        {/* <Navbar/>
        <Cards/>
        <Footer/> */}
    </div>
  );
}

export default App;