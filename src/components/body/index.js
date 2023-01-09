import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import homeHeader from '../../images/home-header.png'
import movieHeader from '../../images/movie-header.png'

const PageStruct = styled.div`
    ${tw`flex flex-col w-full`}
`;

const HeadImage = styled.div`
    background: ${props => props.background};
    display: ${props => props.display};
    padding-top: ${props => props.padding-top};
    ${tw`h-90v bg-cover pt-64 md:pt-16 overflow-hidden md:overflow-visible`}
`;

const BodyGrad = styled.div`
    height: 10vh;
    background-image: linear-gradient(black, #202F46);
`;

const ContentContainer = styled.div`
    ${tw`relative flex flex-col xl:flex-row flex-nowrap text-left bg-gits_blue p-8 md:p-32`}
`;

const ContentParagraph = styled.div`
    ${tw`flex-initial w-auto xl:w-5/6 pt-8 xl:pt-0 pl-0 xl:pl-8`}
`;

const ContentP = styled.p`
    ${tw`text-xs md:text-base text-gits_white`}
`;

const ContentH2 = styled.h2`
    ${tw`text-gits_darkviolet`}
`;

const Cta = styled.div`
    ${tw`flex w-auto xl:w-5/6 pt-8 xl:pt-0 pl-0 xl:pl-8`}
`;

export const HomePage = () => (
    <PageStruct>
        <HeadImage background="black" display="flex" padding-top="256px">
            <img className="w-full m-auto scale-125 md:scale-75" src={homeHeader} alt="home-header"/>
        </HeadImage>
        <BodyGrad />
        <ContentContainer>
            <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/XCzTPT5c5NY" title="YouTube video player"
                allow="encrypted-media; picture-in-picture"
                allowfullscreen></iframe>
            <ContentParagraph>       
            <ContentH2>Sinossi</ContentH2>
            <ContentP>Nell'anno 2029, i progressi nella tecnologia cibernetica hanno permesso alle persone di sostituire parti del
            corpo e organi con quelli robotici. Anche il cervello può essere sostituito con un cyber-brain, con la possibilità, tramite esso, di accedere a
            Internet e reti diverse. Il maggiore Motoko Kusanagi, un agente cyborg che lavora per il governo, e il suo team hanno ricevuto
            l'incarico di rintracciare il famigerato hacker noto come "Il burattinaio" e scoprire i suoi piani.</ContentP>
            <ContentH2 className="mt-4">Informazioni</ContentH2>
            <ContentP>“Ghost in the Shell” (攻殻機動隊 - Kōkaku kidōtai) è un film d'animazione del 1995 diretto da <span>Mamoru Oshii</span>. 
            Il soggetto è basato sul manga originale omonimo di <span>Masamune Shirow</span>. Prodotto in Giappone dallo studio <span>Production I.G.</span>, il film ha avuto un
            seguito nel 2004 intitolato “Ghost in the Shell 2 - Innocence” (イノセンス - Inosensu). Nel 2008 la pellicola originale è stata sottoposta ad un profondo restyling, con largo uso della computer
            grafica, e ripubblicata con il titolo “Ghost in the Shell 2.0”.</ContentP>
            <br /><ContentP>Informazioni dettagliate alla pagina <a  className="hover:text-gits_rusty" href="https://www.imdb.com/title/tt0113568/">IMDb</a></ContentP>
            </ContentParagraph>
        </ContentContainer>
    </PageStruct>
)

export const MoviePage = () => (
    <PageStruct>
        <HeadImage background="#202F46" display="block" padding-top="128px">
            <img className="w-full m-auto" src={movieHeader} alt="home-header"/>
        </HeadImage>
        <ContentContainer>
            
        </ContentContainer>
    </PageStruct>
)