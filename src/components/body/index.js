import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import homeHeader from '../../images/home-header.png'


const HeadImage = styled.div`
    ${tw`h-90v flex bg-cover bg-black pt-64 md:pt-16 bg-black`}
`;

export const HomeCover = () => (
    <HeadImage>
        <img className="m-auto" src={homeHeader} alt="home-header"/>
    </HeadImage>
)
