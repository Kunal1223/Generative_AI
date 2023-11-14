import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home'
import Recipe from './component/Recipe'
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import About from './component/About';
import Law from './component/Law';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/recipe' element={<Recipe/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/law' element={<Law/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
