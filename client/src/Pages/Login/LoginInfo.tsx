import React, { ReactElement } from 'react';
import { useSetRecoilState } from 'recoil';
import Header from '../../Components/Header/Header';
import LoginInfoMain from '../../Components/Login/LoginInfoMain';
import { theme } from '../../Recoil/Theme';

const LoginInfo = (): ReactElement => {
  const setThemeColor = useSetRecoilState(theme);
  setThemeColor('lightYellow');

  return (
    <div>
      <Header />
      <LoginInfoMain />
    </div>
  );
};
export default LoginInfo;
