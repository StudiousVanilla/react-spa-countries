import './App.css';
import Countries from './components/Countries';
import Country from './components/Country';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />}/>
        <Route path="/:cca3" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Add home button to individual countries page
// Region display ?
// Borders not resetting once clikced through to new country - fix!!! (investage cca3 fix attempt)