import React, { ReactElement } from 'react';
import { MainHeaderDiv } from './style';
import mainHeaderContentImg from '../../../Assets/메인헤더글.svg';
import SearchBar from './SearchBar';
import { useScrollFadeIn, useLottie } from '../../../Hooks';
import firework from '../../../Assets/Lottie/firework.json';
import firework2 from '../../../Assets/Lottie/firework0.5s.json';
import birds from '../../../Assets/Lottie/birds.json';
import BGMain from '../../../Assets/Lottie/BGMain.json';

const MainHeader = (): ReactElement => {
  const animation = useScrollFadeIn('up', 1, 0);
  const animation2 = useScrollFadeIn('up', 1, 0.25);
  const lottieFireWork = useLottie(firework, true, 14, 14);
  const lottieFireWork2 = useLottie(firework2, true, 12, 12);
  const lottieBirds = useLottie(birds, true, 30, 30);
  const lottieBGMain = useLottie(BGMain, true, 100, 100);

  return (
    <MainHeaderDiv>
      <div id="lottie" {...lottieFireWork} />
      <div id="lottie2" {...lottieFireWork2} />
      <div id="lottie3" {...lottieBirds} />
      <div id="lottieBG" {...lottieBGMain} />
      <div className="content">
        <article {...animation}>
          <img src={mainHeaderContentImg} className="main-header" />
          <span>다양한 우리들의 공간을 찾아보세요</span>
        </article>
        <article {...animation2}>
          <SearchBar />
        </article>
      </div>
    </MainHeaderDiv>
  );
};
export default MainHeader;

// 그라데이션은 로띠로 적용하기 약간 불편...
