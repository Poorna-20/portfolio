import SideBar from "./components/SideBar/SideBar";
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import { useState } from "react";
const App = () => {

  const [dark,setDark] = useState(false);

  const handleChange = (e) => {
    if(e.target.value === 'light'){
      setDark(false);
    }else{
      setDark(true);
    }
  }
  return (
    
    <div className={`main ${!dark ? '' : 'dark'}`}>
      <SideBar/>
      <div className="color_toggle"> 
        <select className='light_dark_toggle' onChange={handleChange}> 
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
    </div>
  )
}

export default App
