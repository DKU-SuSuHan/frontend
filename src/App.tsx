import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';

import { useEffect } from 'react';

import './App.css';
import HomePageBeforeLogin from './pages/HomePageBeforeLogin';
import HomePageAfterLogin from './pages/HomePageAfterLogin';
import SetNicknamePage from './pages/SetNicknamePage';
import OauthKakaoRedirectPage from './pages/OauthKakaoRedirectPage';
import AddTravelPage from './pages/AddTravelPage';
import { getUser } from './lib/getUser';

function App() {
  const loginStatus = useSelector(
    (status: RootState) => status.login.isLoggedIn,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // if (loginStatus) {
    getUser(dispatch);
    // }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              loginStatus ? <HomePageAfterLogin /> : <HomePageBeforeLogin />
            }
          />
          <Route path="/set-nickname" element={<SetNicknamePage />} />
          <Route path="/auth" element={<OauthKakaoRedirectPage />} />
          <Route path="/add-travel" element={<AddTravelPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
