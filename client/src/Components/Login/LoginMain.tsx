import React, { ReactElement } from 'react';
import googleImg from '../../Assets/구글로그인.png';
import {
  LoginButtonContainer,
  LoginContentContainer,
  LoginDetailSpan,
  LoginMainContainer,
  LoginSpan,
} from './style';

const LoginMain = (): ReactElement => {
  const status = 'notLogin';
  return (
    <LoginMainContainer>
      <LoginContentContainer>
        <LoginSpan>로그인</LoginSpan>
        <LoginDetailSpan>유클러버스 회원가입은</LoginDetailSpan>
        <LoginDetailSpan>구글 아이디 연동을 통해 진행됩니다.</LoginDetailSpan>
        <LoginDetailSpan>아주메일로 로그인을 진행해주세요</LoginDetailSpan>
        <LoginButtonContainer>
          <button>
            <img src={googleImg} width="304px" height="45px" />
          </button>
        </LoginButtonContainer>
      </LoginContentContainer>
    </LoginMainContainer>
  );
};
export default LoginMain;
