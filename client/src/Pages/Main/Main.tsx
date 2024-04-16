import React, { ReactElement, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import MainActivity from '../../Components/Main/MainActivity/MainActivity';
import MainAward from '../../Components/Main/MainAward/MainAward';
import MainBoardContainer from '../../Components/Main/MainBoard/MainBoardContainer';
import MainGreatClub from '../../Components/Main/MainGreatClub/MainGreatClub';
import MainHeader from '../../Components/Main/MainHeader/MainHeader';
import MainNewClub from '../../Components/Main/MainNewClub/MainNewClub';
import Introduce from '../../Components/Footer/Introduce';
import Footer from '../../Components/Footer/Footer';
import useCheckLogin from '../../Hooks/useCheckLogin';
import { theme } from '../../Recoil/Theme';
import EnterMetaverse from '../../Components/Footer/EnterMetaverse';

const Main = (): ReactElement => {
  const setThemeColor = useSetRecoilState(theme);
  setThemeColor('default');

  useCheckLogin();
  return (
    <>
      <Header />
      <section>
        <MainHeader />
        <MainBoardContainer />
        <MainActivity />
        <MainAward />
        <MainNewClub />
        <MainGreatClub />
      </section>
      <EnterMetaverse />
      <Introduce />
      <Footer />
    </>
  );
};
export default Main;
