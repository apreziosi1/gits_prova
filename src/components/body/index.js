import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { regia1, regia2, bio1, bio2, bio3, bio4, bio5, bio6, quote1, quote2, quote3, quote4, quote5, quote6 } from '../texts';
import homeHeader from '../../images/home-header.png'
import movieHeader from '../../images/movie-header.png'
import poster1 from '../../images/poster1.png'
import poster2 from '../../images/poster2.png'
import poster3 from '../../images/poster3.png'
import poster4 from '../../images/4k-release.png'
import oshii from '../../images/oshii.png'
import p1 from '../../images/personaggio-1.png'
import p2 from '../../images/personaggio-2.png'
import p3 from '../../images/personaggio-3.png'
import p4 from '../../images/personaggio-4.png'
import p5 from '../../images/personaggio-5.png'
import p6 from '../../images/personaggio-6.png'

const PageStruct = styled.div`
    ${tw`block w-full`}
`;

const BorderContainer = styled.div`
    ${tw`flex flex-col relative justify-center border-2 border-gits_darkviolet rounded-sm m-0 p-4 mb-16 xl:mt-4`}
`;

const ImgRow = styled.div`
    ${tw`flex flex-col justify-center`};
    @media screen and (min-width: 768px) {
        display: grid;
        place-items: center;
        grid-template-columns: ${props => props.gridTemplate};
        column-gap: 1em;
        }
      }
`;

const HeadImage = styled.div`
    background: ${props => props.background};
    display: ${props => props.display};
    padding-top: ${props => props.paddingTop};
    height: ${props => props.heightV};
    ${tw`bg-cover overflow-hidden xl:overflow-visible md:pt-0`}
`;

const CharacterImg = styled.div`
    &:after {
        content:'';
        position: ${props => props.position};
        left:0; 
        top:0;
        width:100%; 
        height:100%;
        background-image: ${props => props.backgroundImage};
    }
`;

const BodyGradient = styled.div`
    height: 10vh;
    background-image: ${props => props.backgroundImage};
`;

const ContentContainer = styled.div`
    flex-direction: ${props => props.flexDir};
    gap: ${props => props.gap};
    background-color: ${props => props.backgroundColor};
    ${tw`relative flex justify-center w-full flex-nowrap text-left p-8`}
`;

const ContentParagraph = styled.div`
    padding-bottom: ${props => props.paddingBottom};
    width : ${props => props.width};
    ${tw`flex-initial w-full`}
`;

const ContentP = styled.p`
    ${tw`text-sm md:text-base text-gits_white`}
`;

const ContentH2 = styled.h2`
    ${tw`text-4xl font-semibold text-gits_darkviolet mb-4 z-20`}
`;

const RustyLink = styled.a`
    ${tw`hover:text-gits_rusty`}
`;

function TextOnImageCenter(props) {
    return (
        <>
            <ContentH2 className=''>{props.title}</ContentH2>
            <div className="flex flex-col content-center min-[1368px]:relative text-gits_white">
                <ContentP className='sm:z-20 min-[1368px]:top-1/2 min-[1368px]:-translate-y-1/2 min-[1368px]:absolute min-[1368px]:text-left min-[1368px]:left-0 min-[1368px]:w-3/12'>
                    {props.Text1}
                </ContentP>
                <div className='relative'>
                <CharacterImg position="absolute" backgroundImage={props.gradient}>
                    <img className="m-auto max-h-[560px] w-auto" src={props.ImageSrc} alt={props.ImageSrc}/>
                </CharacterImg>
                </div>
                <ContentP className="sm:z-20 min-[1368px]:top-1/2 min-[1368px]:-translate-y-1/2 min-[1368px]:absolute min-[1368px]:text-right min-[1368px]:right-0 min-[1368px]:w-3/12">
                    {props.Text2}
                </ContentP> 
            </div>
        </>
    )
}

function TextOnImageLeft(props) {
    return (
        <>
        <ContentH2>{props.title}</ContentH2>
        <div className="flex flex-col content-center min-[1368px]:relative text-gits_white mb-16">
            <ContentP className='sm:z-20 top-0 min-[1368px]:absolute min-[1368px]:text-left min-[1368px]:left-0 min-[1368px]:w-3/12'>
                {props.Text1}
            </ContentP>
            <div className='relative'>
            <CharacterImg position="absolute" backgroundImage={props.gradient}>
                <img className="mx-auto max-h-[560px] w-auto" src={props.ImageSrc} alt={props.ImageSrc}/>
            </CharacterImg>
            </div>
            <ContentP className="sm:z-20 bottom-0 min-[1368px]:absolute min-[1368px]:text-right min-[1368px]:right-0 min-[1368px]:w-3/12">
                {props.Text2}
            </ContentP> 
        </div>
    </>
    )
}

function TextOnImageRight(props) {
    return (
        <>
        <ContentH2 className="text-right">{props.title}</ContentH2>
        <div className="flex flex-col content-center min-[1368px]:relative text-gits_white mb-16 last:mb-0">
            <ContentP className='sm:z-20 bottom-0 min-[1368px]:absolute min-[1368px]:text-left min-[1368px]:left-0 min-[1368px]:w-3/12'>
                {props.Text1}
            </ContentP>
            <div className='relative'>
            <CharacterImg position="absolute" backgroundImage={props.gradient}>
                <img className="mx-auto max-h-[560px] w-auto" src={props.ImageSrc} alt={props.ImageSrc}/>
            </CharacterImg>
            </div>
            <ContentP className="sm:z-20 top-0 min-[1368px]:absolute min-[1368px]:text-right min-[1368px]:right-0 min-[1368px]:w-3/12">
                {props.Text2}
            </ContentP> 
        </div>
    </>
    )
}


export const HomePage = () => (
    <PageStruct>
        <HeadImage background="black" display="flex" paddingTop="192px" heightV="90vh">
            <img className="w-full m-auto scale-125 md:scale-75" src={homeHeader} alt="home-header"/>
        </HeadImage>
        <BodyGradient backgroundImage="linear-gradient(black, #202F46);"/>
        <ContentContainer className="flex-col min-[1368px]:flex-row" gap="2.5em" backgroundColor="#202F46">
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
            <ContentP>“Ghost in the Shell” (攻殻機動隊 - Kōkaku kidōtai) è un film d'animazione del 1995 diretto da Mamoru Oshii. 
            Il soggetto è basato sul manga originale omonimo di Masamune Shirow. Prodotto in Giappone dallo studio Production I.G., il film ha avuto un
            seguito nel 2004 intitolato “Ghost in the Shell 2 - Innocence” (イノセンス - Inosensu). Nel 2008 la pellicola originale è stata sottoposta ad un profondo restyling, con largo uso della computer
            grafica, e ripubblicata con il titolo “Ghost in the Shell 2.0”.</ContentP>
            <br /><ContentP>Informazioni dettagliate alla pagina <a className="hover:text-gits_rusty" href="https://www.imdb.com/title/tt0113568/">IMDb</a></ContentP>
            </ContentParagraph>
        </ContentContainer>
    </PageStruct>
)

export const MoviePage = () => (
    <PageStruct>
        <HeadImage background="#202F46" display="block" paddingTop="256px">
            <img className="w-full h-full m-auto scale-125 md:scale-100" src={movieHeader} alt="home-header"/>
        </HeadImage>
        <ContentContainer backgroundColor="#202F46">
            <BorderContainer flexDir="column">
                <ContentParagraph paddingBottom="2em" width="w-full">       
                        <ContentH2>Descrizione</ContentH2>
                        <ContentP>“Ghost in the Shell” è un anime cyberpunk del 1995 diretto da Mamoru Oshii.
                        Il film è basato sul manga omonimo di Masamune Shirow ed è stato sceneggiato da Kazunori Itō.
                        Il film è una co-produzione internazionale giapponese-britannica, prodotta da Kodansha, Bandai Visual e
                        Manga Entertainment, con le animazioni dello studio Production I.G. Il film è ambientato nel Giappone del 2029 e segue le vicende di Motoko Kusanagi, un agente cyborg di sicurezza
                        pubblica, nella sua caccia a un misterioso hacker conosciuto come "Il Burattinaio".
                        La narrazione incorpora temi filosofici incentrati sull'identità di sé in un mondo
                        tecnologicamente avanzato. La musica, composta da Kenji Kawai, include voci in lingua giapponese classica.
                        La critica ha elogiato in particolare la narrazione del film, la colonna sonora e le immagini,
                        ottenute attraverso una combinazione di animazione tradizionale e animazione CGI.
                        Il film, che aveva un budget di oltre 10 milioni di dollari, fu inizialmente un fallimento al botteghino,
                        prima di attirare un seguito di culto in home video.</ContentP>
                </ContentParagraph>
                <ImgRow gridTemplate="repeat(3, minmax(0, 1fr))">
                    <img className="h-8/12 w-auto pb-4" src={poster1} alt="poster1"/>
                    <img className="h-8/12 w-auto pb-4" src={poster2} alt="poster2"/>
                    <img className="h-8/12 w-auto pb-4" src={poster3} alt="poster3"/>
                </ImgRow>
            </BorderContainer>
        </ContentContainer>
        <BodyGradient backgroundImage="linear-gradient(#202F46, black);"/>
        <ContentContainer flexDir="column" backgroundColor="black">
            <BorderContainer backgroundColor="black">       
                <TextOnImageCenter title="Regia" Text1={regia1} Text2={regia2} ImageSrc={oshii} gradient="radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 40%)"/>
            </BorderContainer>
        </ContentContainer>
        <ContentContainer backgroundColor="black">
        <BorderContainer backgroundColor="black">
            <ContentH2>Personaggi</ContentH2>
            <ContentP className='mb-12'>
                L'universo di Ghost in the Shell è ampio e complesso, con molti personaggi presenti nei film, nelle serie TV, nei romanzi e nei manga. Ogni serie ha un universo diverso. Per la trasposizione anime sono stati scelti alcuni tra i personaggi principali della storia principale del manga originale.
            </ContentP>
            <TextOnImageLeft title="Motoko Kusanagi" Text1={quote1} Text2={bio1} ImageSrc={p1} gradient="radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 40%)" />
            <TextOnImageRight title="Batou" Text1={bio2} Text2={quote2} ImageSrc={p2} gradient="radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 40%)"/>
            <TextOnImageLeft title="Daisuke Aramaki" Text1={quote3} Text2={bio3} ImageSrc={p3} gradient="radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 40%)" />
            <TextOnImageRight title="Togusa" Text1={bio4} Text2={quote4} ImageSrc={p4} gradient="radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 40%)" />
            <TextOnImageLeft title="Il Burattinaio" Text1={quote5} Text2={bio5} ImageSrc={p5} gradient="radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 40%)" />
            <TextOnImageRight title="Nakamura" Text1={bio6} Text2={quote6} ImageSrc={p6} gradient="radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 40%)" />
        </BorderContainer>
    </ContentContainer>
    <BodyGradient backgroundImage="linear-gradient(black, #202F46);"/>
    <ContentContainer backgroundColor="#202F46">
        <BorderContainer backgroundColor="#202F46">
            <ContentH2>Critica</ContentH2>
            <ContentP>
                <img className="align-baseline h-8/12 w-auto pr-8 pb-8 md:pb-0 float-left" src={poster4} alt="poster4"/>
                "Ghost in the Shell", primo anime ad essere presentato alla Mostra Internazionale d’Arte Cinematografica di Venezia (nel 1996), 
                non ha solo contribuito a porre le fondamenta per la costruzione di un universo cinematografico che si serve di un genere, la fantascienza, per restituire allo spettatore una visione tragica 
                e pessimistica del mondo, in cui il singolo individuo viene privato ogni giorno di più della sua individualità, ma ha anche permesso che tutte quelle riserve e quei preconcetti nei confronti 
                dell’animazione nipponica da parte del pubblico occidentale venissero definitivamente annullati (operazione riuscita non solo grazie all’opera di Oshii, ma anche al lavoro di altri maestri come 
                Katsuhiro Otomo e Hayao Miyazaki). Ambientato in un mondo a metà fra l’universo di Blade Runner (1982) e quello di Akira (1988), "Ghost in the Shell" è un’opera essenziale nella sua durata 
                (appena 82 minuti) ma complessa nella struttura e tanto macchinosa quanto affascinante nella vastità delle tematiche che affronta. Il ritmo sostenuto che contraddistingue la creatura di Oshii avvolge 
                lo spettatore in un algida membrana dove il tempo sembra fermarsi e pare ci sia spazio per concentrarsi esclusivamente sulle profonde riflessioni di tipo religioso-filosofico che la sceneggiatura firmata 
                da Kazunori Ito fa emergere per comporre un mosaico contenutistico dal valore incontestabile. L’ingannevole percezione del reale, la deriva del progresso tecnologico, il concetto di identità e di “essere” 
                al quale l’individuo si sente intrinsecamente legato sono questioni analizzate con inquietante e seducente lungimiranza, che si insinuano nella splendida caratterizzazione di Motoko Kusanagi, il 
                cyborg protagonista della storia, vero e proprio precursore dell’immagine dell’eroina animata, o in carne ed ossa, sul grande schermo, e che si amalgamano insieme alla perfezione anche grazie 
                alle solenni musiche composte da Kenji Kawai. Al di là del genere di appartenenza che sia in grado di descriverne la natura autentica nel miglior modo possibile (animazione, poliziesco, fantascienza, cyberpunk), 
                è indubbio che "Ghost in the Shell" travalichi la mera definizione di prodotto d’intrattenimento (nonostante le sequenze d’azione frenetiche e concitate) per configurarsi come opera matura e di non semplice 
                fruizione, che oltre ad aver precorso la narrativa della recente storia del cinema sci-fi, è riuscita a guadagnarsi un posto d’onore nella schiera dei film più apprezzati dai cultori dell’animazione mondiale.
                <div className='flex flex-col gap-8 py-8'>
                <RustyLink href="https://www.rottentomatoes.com/m/ghost_in_the_shell">Rotten Tomatoes</RustyLink>
                <RustyLink href="https://www.metacritic.com/movie/ghost-in-the-shell">Metacritic</RustyLink>
                <RustyLink href="https://www.rogerebert.com/reviews/ghost-in-the-shell-1996">Roger Ebert</RustyLink></div>
            </ContentP>
        </BorderContainer>
    </ContentContainer>
    </PageStruct>
)