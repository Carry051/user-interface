import './App.css';
import { BrowserRouter } from "react-router-dom";

import RouteUserProfile from './routers/RouteUserProfile';
import Navbars from './components/Navbars';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbars/>
        <RouteUserProfile/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App