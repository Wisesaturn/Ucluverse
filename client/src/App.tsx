import axios from 'axios';
import React, { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useHref } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Club from './Pages/Club/Club';
import ClubList from './Pages/Club/ClubList';
import Login from './Pages/Login/Login';
import LoginInfo from './Pages/Login/LoginInfo';
import Main from './Pages/Main/Main';
import Introduce from './Pages/Introduce/Introduce';
import AuthRoute from './Routes/AuthRoute';
import LoginRoute from './Routes/LoginRoute';
import ClubAdmin from './Pages/Admin/ClubAdmin';

import { ClubListState, DepartmentListState } from './Recoil/Club';
import MyPage from './Pages/MyPage/MyPage';
import { Loading } from './Components/Animation';
import Metaverse from './Pages/Metaverse/Metaverse';
import api from './Util/helpers/Auth/Api';
import { onRefreshUpdate } from './Util/helpers/Auth/Auth';

axios.defaults.withCredentials = true;

const App = () => {
  // PREVIOUS
  // const setClubList = useSetRecoilState(ClubListState);
  // const setDepartmentList = useSetRecoilState(DepartmentListState);
  // useEffect(() => {
  //   api.get(`/clubs/department`).then((res) => {
  //     setDepartmentList(res.data.res.clubs);
  //   });

  //   api.get(`/clubs/central`).then((res) => {
  //     setClubList(res.data.res.clubs);
  //   });

  //   onRefreshUpdate();
  // }, []);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/login"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />
          <Route
            path="login/info"
            element={
              <LoginRoute>
                <LoginInfo />
              </LoginRoute>
            }
          />
          <Route
            path="/club/:id/*"
            element={
              <AuthRoute>
                <Club />
              </AuthRoute>
            }
          />
          <Route
            path="/clubList/*"
            element={
              <AuthRoute>
                <ClubList />
              </AuthRoute>
            }
          />
          <Route
            path="/admin/:id"
            element={
              <AuthRoute>
                <ClubAdmin />
              </AuthRoute>
            }
          />
          <Route
            path="/mypage"
            element={
              <AuthRoute>
                <MyPage />
              </AuthRoute>
            }
          />
          <Route
            path="metaverse"
            element={
              <AuthRoute>
                <Metaverse />
              </AuthRoute>
            }
          ></Route>
          <Route path="/introduce" element={<Introduce />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
