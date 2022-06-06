import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import arrow from '../../assets/icons/arrow-down.svg'
import './styles.scss'
import getEpisodesBySeason from '../../services/getEpisodesBySeason';

export default function EpisodesPage() {
    const [season, setSeason] = useState('Temporada 1')
    const [select, setSelect] = useState(false)
    const [episodesList, setEpisodesList] = useState([])

    useEffect(() => {
        getEpisodesList(season)

    }, [season])

    async function getEpisodesList(temp) {
        const epList = await getEpisodesBySeason(temp);
        setEpisodesList(epList)
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
                                }}>Temporada 1</li>
                                <li onClick={() => {
                                    setSeason('Temporada 2')
                                    setSelect(false)
                                }}>Temporada 2</li>
                                <li onClick={() => {
                                    setSeason('Temporada 3')
                                    setSelect(false)
                                }}>Temporada 3</li>
                                <li onClick={() => {
                                    setSeason('Temporada 4')
                                    setSelect(false)
                                }}>Temporada 4</li>
                                <li onClick={() => {
                                    setSeason('Temporada 5')
                                    setSelect(false)
                                }}>Temporada 5</li>
                            </ul>
                        }
                    </div>
                    <div className='cards-orientation'>
                        {
                            episodesList.length ? (
                                episodesList.map((ep) => {
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
                    </div>
                </div>
            </div>
        </>
    )
}
