import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiance from "./components/Experiance";
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        {/* <Portfolio></Portfolio>
        <Experiance></Experiance> */}
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
