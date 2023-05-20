import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Route, Routes} from "react-router-dom"
function App() {
  return (
    // <div className="App">
    //   <Header/>
    //  <Home/>
    //  <About/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/About" element={<About/>} ></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
