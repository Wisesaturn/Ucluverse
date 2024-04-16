import { ReactElement } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import LinkButton from '../Button/LinkButton';
import { HeaderContainer, HeaderLinkContainer, UserInfoContainer, BackGround } from './style';
import Assets from '../../Assets';
import { userState } from '../../Recoil/User';
import { theme } from '../../Recoil/Theme';

function Header(): ReactElement {
  const { logoImg, logoImgWhite, profileImg, profileImgWhite, alarmImg, logoutImg, mypageImg } =
    Assets;
  const user = useRecoilValue(userState);
  const themeColor = useRecoilValue(theme);
  const setUser = useSetRecoilState(userState);

  const onLogout = () => {
    setUser({
      userIdx: 0,
      name: '',
      departmentIdx: 0,
      nickname: '',
      studentId: 0,
      email: '',
      BODList: null,
      isAdmin: false,
      profilePhoto: '',
      phoneNumber: '',
      starredClubs: [],
    });
    window.location.href = '/Ucluverse';
  };

  return (
    <HeaderContainer>
      <LinkButton url="/">
        <img
          alt=""
          src={themeColor === 'purple' ? logoImgWhite : logoImg}
          width="50px"
          height="50px"
        />
      </LinkButton>
      <HeaderLinkContainer color={themeColor} className={user.userIdx === 0 ? '' : 'logined'}>
        <LinkButton url="/">홈</LinkButton>
        <LinkButton url="/clubList">동아리</LinkButton>
        <LinkButton url="/clubList/department">소학회</LinkButton>
        <LinkButton url="/clubList/other">그 외 단체</LinkButton>
      </HeaderLinkContainer>

      {user.userIdx === 0 ? (
        <LinkButton url="/login">
          <img
            src={themeColor === 'purple' ? profileImgWhite : profileImg}
            width="50px"
            height="50px"
          />
        </LinkButton>
      ) : (
        <UserInfoContainer>
          <img
            src={alarmImg}
            width="18px"
            height="21px"
            onClick={() => {
              // todo : 모달창 컴포넌트 만들고 클릭 이벤트 추가
            }}
          />
          <img
            src={logoutImg}
            width="24px"
            height="21px"
            onClick={() => {
              onLogout();
            }}
          />
          <LinkButton url="/mypage">
            <img alt="" src={mypageImg} width="36px" height="36px" />
          </LinkButton>
        </UserInfoContainer>
      )}
      <BackGround color={themeColor} />
    </HeaderContainer>
  );
}
export default Header;
