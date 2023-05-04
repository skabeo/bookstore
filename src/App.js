import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bookapp from './components/Bookapp';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bookapp />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
