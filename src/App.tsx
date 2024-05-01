import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SetNicknamePage from './pages/SetNicknamePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/set-nickname" element={<SetNicknamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
