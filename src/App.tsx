import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SetNicknamePage from './pages/SetNicknamePage';
import OauthKakaoRedirectPage from './pages/OauthKakaoRedirectPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/set-nickname" element={<SetNicknamePage />} />
          <Route path="/auth" element={<OauthKakaoRedirectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
