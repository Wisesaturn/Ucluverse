import React, { ReactElement } from 'react';
import { ClubContainer, ImgContainer } from './style';
import titleImg from '../../../Assets/활동 우수 동아리.png';
import test1 from '../../../Assets/test1.jpeg';
import test2 from '../../../Assets/test2.jpeg';
import test3 from '../../../Assets/test3.jpeg';
import test4 from '../../../Assets/test4.jpeg';
import test5 from '../../../Assets/test5.jpeg';
import { Link } from 'react-router-dom';
const MainGreatClub = (): ReactElement => {
  return (
    <ClubContainer>
      <img src={titleImg} className="title" />
      <span>동아리 활동이 현재 매우 활발한 동아리에요.</span>
      <span>사람들과 교류를 쉽게 할 수 있을 거에요!</span>
      <ImgContainer>
        <div>
          <Link to="login">
            <img src={test1} />
          </Link>
        </div>
        <div>
          <img src={test2} />
        </div>
        <div>
          <img src={test3} />
        </div>
        <div>
          <img src={test4} />
        </div>
        <div>
          <img src={test5} />
        </div>
        <div>
          <img src={test1} />
        </div>
      </ImgContainer>
      <Link to="/">
        <span>→ 자세히 보기</span>
      </Link>
    </ClubContainer>
  );
};
export default MainGreatClub;