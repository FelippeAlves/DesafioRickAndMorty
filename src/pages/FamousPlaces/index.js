import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import getAllLocations from '../../services/getAllLocations'
import './styles.scss'

export default function FamousPlaces() {
    const [data, setData] = useState('')

    useEffect(() => {
        getLocations()

    }, [])

    async function getLocations() {
        const locations = await getAllLocations()

        setData(locations)
    }

    return (
        <>
            <Header />
            <main>
                <div className='famous-container'>
                    <div className='famous-content'>
                        <div className='title'>
                            <lavel>Lugares Famosos de Rick & Morty</lavel>
                        </div>
                        <div className='cards-container'>
                            {
                                data && (
                                    data.map((loc) => {
                                        return <>
                                            <div className='card'>
                                                <div className='card-description'>
                                                    <label className='origin-place'> { loc.name } </label>
                                                    <label className='location-place'> { loc.dimension } </label>
                                                </div>
                                                <img className='card-img' src={loc.character.image} />
                                            </div>
                                        </>
                                    })
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
