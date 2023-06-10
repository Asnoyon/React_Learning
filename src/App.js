
import './App.css';
import Home from "./Pages/Home"
import About from './Pages/About';
import Contact from './Pages/Contact';
import Clipboard from './Pages/Clipboard';
import Focus from './Pages/Focus';
import Keyboard from './Pages/Keyboard';
import Filter from './Pages/Filter';
import WelcomeAdmin from './Pages/WelcomeAdmin';
import Style from './Pages/Style';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from './Pages/ReactBootstrap';
import Input from './Pages/Input';
import ControlComponent from './Pages/ControlComponent';
import Heading from './Pages/BlogWebsite/Heading';
import Carousel from './Pages/BlogWebsite/Carousel';
function App() {
  return (
    <div className="App">
      <Home/>
      {/* <About/> */}
      {/* <Contact name="Noyon" number="13585" />
      <Contact name="Asad" number="23566" />
      <Contact name="Jaman" number="63288" /> */}
      {/* <Clipboard/>
      <Focus/>
      <Keyboard/>
      <Style/>
      <WelcomeAdmin/>
      <ReactBootstrap/> */}
      {/* <Input/>
      <ControlComponent/> */}
      <Heading/>
      <Carousel/>
    </div>
  );
}

export default App;