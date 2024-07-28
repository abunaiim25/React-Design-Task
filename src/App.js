// import logo from './logo.svg';
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/includes/Footer";
import Navbar from "./components/includes/Navbar";
import Home from "./components/pages/Home/Index";

function App() {
  return (
    <div>
      <div className="container">
        <Navbar />

        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
