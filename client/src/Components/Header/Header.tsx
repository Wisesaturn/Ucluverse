import React, { ReactElement } from 'react';
import LinkButton from '../Button/LinkButton';
import { HeaderContainer, HeaderLinkContainer } from './style';
import logoImg from '../../Assets/로고.png';
const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <LinkButton url="/">
        <img src={logoImg} width="50px" height="50px" />
      </LinkButton>
      <HeaderLinkContainer>
        <LinkButton url="/">홈</LinkButton>
        <LinkButton url="/">동아리</LinkButton>
        <LinkButton url="/">소학회</LinkButton>
        <LinkButton url="/">그 외 단체</LinkButton>
      </HeaderLinkContainer>
      <button>
        <img src="" />
      </button>
    </HeaderContainer>
  );
};
export default Header;
