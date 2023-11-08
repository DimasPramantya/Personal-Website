import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage';
import AboutPage from './pages/aboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
