import React, { ReactElement } from 'react';
import ajou from '../../Assets/ajou-purple.png';
import { FooterDiv } from './style';
import {Heading3, Heading4, Paragraph} from '../../styles/fonts/style';

const Footer = () : ReactElement => {
    return (
        <FooterDiv>
            <img src={ajou}/>
            <footer>
                <Heading4>
                    2022-1 아주대학교 파란학기
                </Heading4>
                <Heading4>
                    유클러버스 (Ucluverse)
                </Heading4>
                <Paragraph>
                    Copyright © 2022 유클러버스. All rights Reserved.
                </Paragraph>
            </footer>
        </FooterDiv>
    );
}

export default Footer;