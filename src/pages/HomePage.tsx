import Article from '../components/articles/Article';
import BaseLink from '../components/shared/BaseLink';
import BaseList from '../components/shared/BaseList';
import BaseParagraph from '../components/shared/BaseParagraph';
import Hero from '../components/articles/hero/Hero';
import HeroRektoratImg from '../assets/images/hero/rektorat-img.webp';
import Section from '../components/articles/section/Section';
import TImageLink from '../lib/types/TImageLinkTypes';
import { partners } from '../data/Partners';

const HomePage = () => {
    document.title = 'Domů - Studentská unie UTB';
    const comingSoon: string = "https://pruvodcestudenta.utb.cz/";
    const heroCommingSoon: TImageLink = {
        text: "Průvodce studenta UTB",
        imgSrc: HeroRektoratImg,
        linkTo: comingSoon
    };
    return (
        <>
            <Article margin>
                <Section title="Ahoj!" titleSize={4}>
                    <BaseParagraph>Jsme Studentská unie UTB. Děláme ty největší a nejlepší mejdany ve Zlíně, informujeme studenty o všem důležitém a dlouhodobě spolupracujeme s univerzitou.</BaseParagraph>
                </Section>
            </Article>
            <Article>
                <Hero imageLink={heroCommingSoon} />
            </Article>
            <Article margin>
                <Section title="Naši partneři" titleSize={2.5}>
                    <BaseList row gap={2}>
                        {partners?.map((item, index) => (
                            <li key={index}>
                                <BaseLink href={item.linkTo} target="_blank" rel="noreferrer">
                                    <img src={item.imgSrc} alt={item.imgAlt} width="100%" height="70" />
                                </BaseLink>
                            </li>
                        ))}
                    </BaseList>
                </Section>
            </Article>
        </>
    );
};
export default HomePage;
