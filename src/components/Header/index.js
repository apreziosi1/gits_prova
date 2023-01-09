import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from "gatsby";
import './style.css'

const isActive = ({ isCurrent }) => {
    return isCurrent ? { className : "active" } : {}
}

const NavWrapper = styled.nav`
    ${tw`bg-black fixed top-0 w-full flex flex-col md:flex-row justify-center tracking-wide font-semibold`}
`;

const NavItem = styled.div`
    ${tw`cursor-pointer flex-initial xl:w-56 md:w-48 justify-center text-center text-xs md:text-base text-gits_white p-6 uppercase`}
`;

const Header = () => (
    <NavWrapper>
        <Link className="MenuItem" to="/" getProps={isActive}><NavItem>home</NavItem></Link>
        <Link className="MenuItem" to="/page-2" getProps={isActive}><NavItem>il film</NavItem></Link>
        <Link className="MenuItem" to="#" ><NavItem>ambientazione</NavItem></Link>
        <Link className="MenuItem" to="#" ><NavItem>gallery</NavItem></Link>
    </NavWrapper>
);

export default Header;
