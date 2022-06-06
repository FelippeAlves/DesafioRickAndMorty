import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import arrow from '../../assets/icons/arrow-down.svg'
import './styles.scss'
import getEpisodesBySeason from '../../services/getEpisodesBySeason';

export default function EpisodesPage() {
    const [season, setSeason] = useState('Temporada 1')
    const [select, setSelect] = useState(false)
    const [episodesList, setEpisodesList] = useState([])
    const itensPerPage = 6
    const [currentPage, setCurrentPage] = useState(0)
    const [pages, setPages] = useState(0)
    let startIndex = 0;
    let endIndex = 5;
    const [currentItens, setCurrentItens] = useState([])


    useEffect(() => {
        getEpisodesList(season)

    }, [season])
    useEffect(() => {
        
        
    }, [currentPage])

    async function getEpisodesList(temp) {
        const epList = await getEpisodesBySeason(temp);
        setEpisodesList(epList)
        setPages(Math.ceil(epList.length / 6))
        setCurrentItens(epList.slice(startIndex, endIndex));
    }

    async function getMoreItens() {
        setCurrentPage(currentPage + 1)
        endIndex += itensPerPage;
        const slice = episodesList.slice(startIndex, endIndex)
        setCurrentItens(slice)
    }

    return (
        <>
            <Header />
            <div className='episodes-container'>
                <div className='episodes-content'>
                    <div className='episodes-title'> Episódios</div>
                    <div className='select-container'>
                        <div className='select-content-orientation' onClick={() => setSelect(!select)}>
                            <div className='season-description'> {season} </div>
                            <img className='arrow-down' alt='seleção para baixo' src={arrow} />
                        </div>
                        {
                            <ul className={select ? 'selectOpen' : 'selectClose'}>
                                <li onClick={() => {
                                    setSeason('Temporada 1')
                                    setSelect(false)
                                    setCurrentPage(0)
                                }}>Temporada 1</li>
                                <li onClick={() => {
                                    setSeason('Temporada 2')
                                    setSelect(false)
                                    setCurrentPage(0)
                                }}>Temporada 2</li>
                                <li onClick={() => {
                                    setSeason('Temporada 3')
                                    setSelect(false)
                                    setCurrentPage(0)
                                }}>Temporada 3</li>
                                <li onClick={() => {
                                    setSeason('Temporada 4')
                                    setSelect(false)
                                    setCurrentPage(0)
                                }}>Temporada 4</li>
                                <li onClick={() => {
                                    setSeason('Temporada 5')
                                    setSelect(false)
                                    setCurrentPage(0)
                                }}>Temporada 5</li>
                            </ul>
                        }
                    </div>
                    <div className='cards-orientation'>
                        {
                            episodesList.length ? (
                                currentItens.map((ep) => {
                                    return (
                                        <div className='card-ep-container'>
                                            <div className='card-ep-description'>
                                                <label className='ep-number'> {ep.id} </label>
                                                <label className='ep-name'> {ep.episode} </label>
                                                <label className='ep-date'> Lançamento {ep.date} </label>
                                            </div>
                                            <img className='img-ep' src={ep.character.image} alt="Imagem de um personagem do desenho" />
                                        </div>
                                    )
                                })
                            ) : null
                        }

                        {
                            pages && currentPage < (pages -1) ? (
                                <>
                                    <span className='see-more' onClick={() => {getMoreItens()}}>Ver mais</span>
                                </>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
