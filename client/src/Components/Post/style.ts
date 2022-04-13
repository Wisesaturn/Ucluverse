import styled from 'styled-components';

export const MainContainer = styled.div``;
export const TitleContainer = styled.div`
  width: 56.3vw;
  height: 44px;
  div {
    span {
      display: inline-block;
      text-align: left;
      letter-spacing: -1.35px;
      opacity: 1;
      vertical-align: middle;
    }
    & > span:nth-of-type(2) {
      width: 10vw;
    }
  }
  .notice {
    background: #f7f4fb 0% 0% no-repeat padding-box;
    span {
      font: normal normal bold 18px/24px Noto Sans KR;
      letter-spacing: -1.35px;
      color: #e86c6c;
    }
    & > span:first-child {
      padding-top: 10px;
      width: 5vw;
      height: 34px;
      margin-right: 20px;
      line-height: 44px;
      text-align: center;
      background: #e86c6c 0% 0%;
      border: 1px solid #dddae0;
      font: normal normal bold 18px/24px Noto Sans KR;
      letter-spacing: -1.35px;
      color: #ffffff;
      opacity: 1;
    }
    a {
      span {
        width: 35vw;
      }
    }
    & > span:nth-of-type(2) {
      width: 10vw;
    }
  }
  .post {
    height: 44px;
    vertical-align: middle;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dddae0;
    opacity: 1;
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      font: normal normal normal 18px/24px Noto Sans KR;
      letter-spacing: -1.35px;
      color: #1a1917;
      opacity: 1;
    }
    & > span:first-child {
      font: normal normal bold 18px/24px Noto Sans KR;
      letter-spacing: -1.35px;
      margin-left: 10px;
      margin-right: 10px;
      opacity: 1;
    }
    a {
      span {
        width: 40vw;
      }
    }
  }

  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;