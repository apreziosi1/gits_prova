import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import linkWeb from '../../images/icons/Website.png'
import linkFb from '../../images/icons/Facebook.png'
import linkTw from '../../images/icons/Twitter.png'
import linkImdb from '../../images/icons/IMDB.png'


const FooterWrapper = styled.div`
    ${tw`relative flex flex-col xl:flex-row justify-center bg-gits_violet`}
`;

const FooterInfo = styled.div`
    ${tw`flex-col p-16 text-gits_white text-xs md:text-base text-center`}
`;

const FooterRow = styled.div`
    display:flex;
    flex-direction:flex-row;
    width: 4em;
    margin: auto;
    justify-content: space-between;
`;

const FooterRow2 = styled.div`
    display:flex;
    flex-direction:flex-row;
    width: 10em;
    margin: auto;
    justify-content: space-between;
`;

const FooterSep = styled.div`
    ${tw`border-white border-2 m-8 h-3/6`}
`;

const WebLink = styled.a`
    ${tw`cursor-pointer text-gits_blue hover:text-gits_rusty m-2`}
`;

const Footer = () => 
    <FooterWrapper>
        <FooterInfo>
            <p>Distributore italiano</p><br />
            <p>Dynit S.r.l.</p><br />
            <FooterRow>
                <a href='https://www.dynit.it/'><img src={linkWeb} /></a>
                <a href='https://it-it.facebook.com/Dynit95/'><img src={linkFb} /></a>
            </FooterRow>
        </FooterInfo>
        <FooterSep />
        <FooterInfo>
            <p>Casa di produzione</p><br />
            <p>Production I.G.</p><br />
            <FooterRow>
                <a href='https://www.production-ig.co.jp/'><img src={linkWeb} /></a>
                <a href='https://twitter.com/productioniginc'><img src={linkTw} /></a>
            </FooterRow>
        </FooterInfo>
        <FooterSep />
        <FooterInfo>
            <p>Informazioni dettagliate</p><br />
            <FooterRow2>
                <p>Film</p>
                <a href='https://www.imdb.com/title/tt0113568/'><img src={linkImdb} /></a>
            </FooterRow2>
            <FooterRow2>
                <p>Regista</p><a href='https://www.imdb.com/name/nm0651900/?ref_=tt_ov_dr'><img src={linkImdb} /></a>
            </FooterRow2>
            <FooterRow2>
                <p>Musiche</p><a href='https://www.imdb.com/name/nm0442766/'><img src={linkImdb} /></a>
            </FooterRow2>
        </FooterInfo>
        <FooterSep />
        <FooterInfo>
            <p>Guarda in streaming</p>
            <WebLink>VVVID</WebLink>
            <WebLink>Prime Vdeo</WebLink>
            <WebLink>Youtube</WebLink><br />
            <br /><p>Acquista</p>
            <WebLink>Eagle Pictures</WebLink>
        </FooterInfo>
    </FooterWrapper>;

export default Footer;
