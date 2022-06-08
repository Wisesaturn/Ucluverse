import React, { useEffect, useState } from 'react';
import { ClubBodyContainer } from './style';
import YukeyHello from '../../../Assets/Lottie/YukeyHello.json';
import { useLottie } from '../../../Hooks';
import { useScrollFadeIn } from '../../../Hooks';
import { Wave } from '../../Animation';
import ClubContentBox from '../ContentBox/ClubContentBox'

const ClubBody = () => {
  const lottieYuKey = useLottie(YukeyHello, true, 20, 20);
  const animation = useScrollFadeIn();
  const animation2 = useScrollFadeIn('up', 1, 0.15, 0);

  return (
    <ClubBodyContainer>
      <section className="top">
        <div className='topBG' />
        <Wave/>
      </section>
      <section className="title" {...animation}>
        <span>아주대학교에는 이러한 공간도 있답니다!</span>
        <article {...animation2}>
          <div id="lottieYukey" {...lottieYuKey} />
        </article>
      </section>
      <section className="content contentBox">
        <ClubContentBox delay={.0}/>
        <ClubContentBox delay={.15}/>
        <ClubContentBox delay={.25}/>
        <ClubContentBox delay={.35}/>
      </section>
      <section className="bottom">
        <Wave rotation={180}/>
        <div className='bottomBG' />
      </section>
    </ClubBodyContainer>
  );
};
export default ClubBody;