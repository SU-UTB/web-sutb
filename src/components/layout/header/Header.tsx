import { IoClose, IoMenu } from 'react-icons/io5';
import { Logo, MenuButton, Title, Wrapper } from './Header.styled';
import { useEffect, useState } from 'react';

import BaseLink from '../../shared/BaseLink';
import IHeaderProps from '../../../lib/interfaces/IHeaderProps';
import Navbar from './navbar/Navbar';
import SULogoSymbol from '../../../assets/images/SU_logo_symbol_05_RGB.png';
import SULogoText from '../../../assets/images/SU_logo_sirka_05_RGB.png';
import { isMobile } from 'react-device-detect';

const Header = ({ title }: IHeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Wrapper>
            <BaseLink href="/">
                {!isMobile && <Logo src={SULogoText} alt="Logo s textem" size={200} />}
                {isMobile && <Logo src={SULogoSymbol} alt="Logo symbol" size={50} />}
            </BaseLink>
            {isMobile && <Title>{title}</Title>}
            {isMobile &&
                <MenuButton onClick={() => handleToggle()}>
                    {isOpen ? <IoClose /> : <IoMenu />}
                </MenuButton>
            }
            <Navbar isOpen={isOpen} />
        </Wrapper >
    );
};
export default Header;