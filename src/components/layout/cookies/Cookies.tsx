import BaseButton from '../../shared/BaseButton';
import BaseList from '../../shared/BaseList';
import BaseParagraph from '../../shared/BaseParagraph';
import CookiesContext from '../../../context/cookies/CookiesContext';
import LinkTo from '../../shared/LinkTo';
import { Wrapper } from './wrapper/Wrapper.styled';
import { useContext } from 'react';

const Cookies = () => {
    const { handleCookies } = useContext(CookiesContext);
    return (
        <Wrapper>
            <BaseParagraph fontSize={.9}>
                Tyto webové stránky používají k poskytování svých služeb soubory Cookies. Používáním těchto webových stránek souhlasíte s použitím souborů Cookies.
            </BaseParagraph>
            <BaseList row gap={2} marginBlock={.5}>
                <LinkTo underline href="https://www.cookie-lista.cz/co-je-cookies.html" target="_blank" rel="noreferrer">
                    Více o cookies
                </LinkTo>
                <BaseButton style onClick={() => handleCookies("hide")}>
                    Odmítnout
                </BaseButton>
                <BaseButton style onClick={() => handleCookies("accept")}>
                    Souhlasím s cookies
                </BaseButton>
            </BaseList>
        </Wrapper>
    )
};
export default Cookies;
