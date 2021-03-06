import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
