import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import getAllLocations from '../../services/getAllLocations'
import './styles.scss'

export default function FamousPlaces() {
    const [data, setData] = useState('')
    const [itens, setItens] = useState([])
    const [pages, setPages] = useState(1)



    useEffect(() => {
        getLocations()

    }, [pages])

    async function getLocations() {
        const locations = await getAllLocations(pages)
        let newList = [...data, ...locations]
        setData(newList)
    }

    return (
        <>
            <Header />
            <main>
                <div className='famous-container'>
                    <div className='famous-content'>
                        <div className='title'>
                            <label data-testid='title'>Lugares Famosos de Rick & Morty</label>
                        </div>
                        <div className='cards-container'>
                            {
                                data && (
                                    data.map((loc) => {
                                        return <>
                                            <div data-testid='card' className='card'>
                                                <div className='card-description'>
                                                    <label className='origin-place'> {loc.name} </label>
                                                    <label className='location-place'> {loc.dimension} </label>
                                                </div>
                                                <img className='card-img' src={loc.character.image} />
                                            </div>
                                        </>
                                    })
                                )
                            }
                        </div>
                        {
                            pages < 6 ? (
                                <div className='btn-more'>
                                    <button data-testid='btn-see-more' className='see-more' onClick={() => setPages(pages + 1)}>Ver mais</button>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
