import "./App.css";

import HomeSet from './pages/home/HomeSet';
import Footer from './components/footer/Footer';
import Cards from './components/cards/Cards';
import Navbar from './components/navbar/Navbar';



function App() {
  return (<>

    <div className="App">
      <Navbar />
      <Cards />
      <Footer />
    </div>
  </>
  );
}

export default App;
