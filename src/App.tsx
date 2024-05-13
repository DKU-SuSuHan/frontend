import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

import './App.css';
import HomePageBeforeLogin from './pages/HomePageBeforeLogin';
import HomePageAfterLogin from './pages/HomePageAfterLogin';
import SetNicknamePage from './pages/SetNicknamePage';
import OauthKakaoRedirectPage from './pages/OauthKakaoRedirectPage';

function App() {
  const loginStatus = useSelector((status: RootState) => status.login);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              loginStatus ? <HomePageBeforeLogin /> : <HomePageAfterLogin />
            }
          />
          <Route path="/set-nickname" element={<SetNicknamePage />} />
          <Route path="/auth" element={<OauthKakaoRedirectPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
