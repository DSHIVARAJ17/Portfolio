
import {BrowserRouter,Routes,Route, Form} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Acheivements from './Component/Acheivements';
import Education from './Component/Education';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import Home from './Component/Home';
function App() {
  return (
    <main>
      <BrowserRouter>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Acheivements" element={<Acheivements/>}></Route>
          <Route path="/Education" element={<Education/>}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
          <Route path="/Skills" element={<Skills/>}></Route>
          </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
