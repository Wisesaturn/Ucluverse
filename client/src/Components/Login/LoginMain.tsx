import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import singInImg from '../../Assets/로그인.png';
import {
  LoginButtonContainer,
  LoginContentContainer,
  LoginDetailSpan,
  LoginMainContainer,
} from './style';
import GoogleIcon from '../../Assets/icon/g-logo.png';
import { userState } from '../../Recoil/User';

declare global {
  interface Window {
    gapi: any;
  }
}

const LoginMain = () => {
  const setUser = useSetRecoilState(userState);

  const notify = () =>
    toast('아주메일로 로그인 해주세요', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  // PREVIOUS
  // const { gapi } = window;
  // const init = () => {
  // gapi.load('auth2', () => {
  //   gapi.auth2.init({
  //     client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  //   });
  //   const options = new gapi.auth2.SigninOptionsBuilder();
  //   options.setPrompt('select_account');
  //   options.setScope('email profile');
  //   gapi.auth2
  //     .getAuthInstance()
  //     .attachClickHandler('GgCustomLogin', options, onSignIn, onSignInFailure);
  // });
  // };
  const checkAjouMail = (email: string) => {
    return email.includes('@ajou.ac.kr');
  };
  const onSignIn = async () => {
    // PREVIOUS
    // const profile = googleUser.getBasicProfile();
    // const email = profile.getEmail();
    const email = 'test@ajou.ac.kr';

    if (checkAjouMail(email)) {
      /**
       * for deploy pages
       * 구글 API 로그인 과정은 생략합니다. (더미 데이터)
       */
      const DUMMY_LOGIN_SUCCESS = {
        accessToken: 'to3eN-login',
        userIdx: 1,
        name: '홍길동',
        departmentIdx: 123,
        nickname: '길동이',
        studentId: 20220001,
        email: 'hong@example.com',
        BODList: [2022, 2023, 2024],
        isAdmin: true,
        profilePhoto: 'https://example.com/profile.jpg',
        phoneNumber: '01012345678',
        starredClubs: [1, 2, 3],
      };
      setUser(DUMMY_LOGIN_SUCCESS);
      // PREVIOUS
      // onLogin(email);
    } else {
      notify();
    }
  };
  const onSignInFailure = (t: any) => {
    console.log(t);
  };
  // PREVIOUS
  // useEffect(() => {
  //   init();
  // }, []);
  return (
    <LoginMainContainer>
      <LoginContentContainer>
        <img src={singInImg} style={{ marginBottom: '2.5rem' }}></img>
        <LoginDetailSpan>유클러버스 회원가입은</LoginDetailSpan>
        <LoginDetailSpan>구글 아이디 연동을 통해 진행됩니다.</LoginDetailSpan>
        <LoginDetailSpan>아주메일로 로그인을 진행해주세요</LoginDetailSpan>
        <LoginButtonContainer>
          <button id="GgCustomLogin" onClick={onSignIn}>
            <img src={GoogleIcon} />
            <p>구글 로그인</p>
          </button>
        </LoginButtonContainer>
      </LoginContentContainer>
    </LoginMainContainer>
  );
};
export default LoginMain;
