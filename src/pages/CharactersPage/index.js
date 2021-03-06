import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import trailing from '../../assets/icons/lupa-icon.svg'
import arrow from '../../assets/icons/arrow-down.svg'
import xIcon from '../../assets/icons/x-icon.png'
import imgCharacter from '../../assets/imgs/Rick-and-Morty-characters-page.png'
import './style.scss';
import searchCharacter from '../../services/getCharacters.js'
import getEpisodes from '../../services/getEpisodes';
import getUniqueCharacter from '../../services/getUniqueCharacter';
import getRelatedCharactersByOrigin from '../../services/getRelatedCharactersByOrigin';

function CharactersPage() {
  const [statusVisible, setStatusVisible] = useState(false)
  const [genderVisible, setGenderVisible] = useState(false)
  const [status, setStatus] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [search, setSearch] = useState(false)
  const [data, setData] = useState('')
  const [chart, setChart] = useState('')
  const [modal, setModal] = useState(false)
  const [rel, setRel] = useState([])
  const [isError, setIsError] = useState(false)
  const itensPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0)
  const [pages, setPages] = useState('')
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = data.slice(startIndex, endIndex);


  const selectStatus = () => {
    setStatusVisible(!statusVisible)
    setGenderVisible(false)
  }

  const selectGender = () => {
    setGenderVisible(!genderVisible)
    setStatusVisible(false)
  }

  useEffect(() => {
    fetchCharacters()

  }, [status, gender])

  async function fetchCharacters() {
    let url = '';
    if (name) {
      url += 'name=' + name;
    }
    if (status) {
      url += '&status=' + status;
    }
    if (gender) {
      url += '&gender=' + gender;
    }
    if (url) {
      const characters = await searchCharacter(url);
      setPages(Math.ceil(characters.results.length / itensPerPage))
      if (characters?.error) {
        setIsError(true)
        return
      }
      const characterEpisodes = await getEpisodes(characters.results)
      characters.results.forEach(character => {
        character.episode = characterEpisodes.filter(ep => ep.characterId === character.id).flatMap(ep => ep.episodes.map(epi => epi.name))
      });
      setIsError(false)
      setSearch(true)
      setData(characters.results)
    }
  }

  async function handleModal(id) {
    const character = await getUniqueCharacter(id);
    setChart(character)
    if (character.origin.url) {
      const related = await getRelatedCharactersByOrigin(character.origin.url, id)
      setRel(related)
    } else {
      setRel([])
    }
    setModal(true)
  }

  function scrollSmooth(e) {
    setCurrentPage(Number(e.target.value));
    const to = document.querySelector('.title-result').offsetTop;
    window.scroll({
      top: to,
      behavior: "smooth",
    });
  }

  return <>
    <Header />
    <main>
      <div className='m-container'>
        <div className='content'>
          <span data-testid='title'>
            Buscar personagem
          </span>
        </div>
        <div className='forms-container'>
          <div>
            <label className='first-description'>
              Buscar Personagens
            </label>
            <div className='box-form'>
              <input data-testid='input-text' id='inpu-text' className='input-text' type="text" onChange={(event) => setName(event.target.value)} />
              <img className='trailing-icon' alt='??cone de lupa para busca' src={trailing} onClick={() => fetchCharacters()} />
            </div>
          </div>

          <div className='small-box-container'>
            <div>
              <label className='description'>
                Status
              </label>
              <div data-testid='select-status' className='box-form-small'>
                <label className='input-text' id='status' onClick={() => selectStatus()}> {status} </label>
                {status ? (
                  <img className='x-icon' alt='??cone para deletar o campo' onClick={() => setStatus('')} src={xIcon} />
                ) : (
                  <img className='arrow-down' alt='??cone de sele????o para baixo' src={arrow} onClick={() => selectStatus()} />
                )}
              </div>
              <ul className={statusVisible ? 'statusOpen' : 'statusClose'}>
                <li onClick={() => {
                  setStatus('Alive')
                  setStatusVisible(!statusVisible)
                }}>Alive</li>
                <li onClick={() => {
                  setStatus('Dead')
                  setStatusVisible(!statusVisible)
                }}>Dead</li>
                <li onClick={() => {
                  setStatus('Unknown')
                  setStatusVisible(!statusVisible)
                }}>Unknown</li>
              </ul>
            </div>

            <div>
              <label className='description'>
                G??nero
              </label>
              <div data-testid='select-gender' className='box-form-small'>
                <label className='input-text' onClick={() => selectGender()}> {gender} </label>
                {gender ? (
                  <img className='x-icon' alt='??cone para deletar o campo' onClick={() => setGender('')} src={xIcon} />
                ) : (
                  <img className='arrow-down' alt='??cone de sele????o para baixo' src={arrow} onClick={() => selectGender()} />
                )}
              </div>
              <ul className={genderVisible ? 'statusOpen' : 'statusClose'}>
                <li onClick={() => {
                  setGender('Female')
                  setGenderVisible(!genderVisible)
                }}>Female</li>
                <li onClick={() => {
                  setGender('Male')
                  setGenderVisible(!genderVisible)
                }}>Male</li>
                <li onClick={() => {
                  setGender('Genderless')
                  setGenderVisible(!genderVisible)
                }}>Genderless</li>
              </ul>
            </div>
          </div>
        </div>
        {modal ?
          (<>
            <div className='modal-container'>
              <div className='card-modal'>
                <div className='button-close-modal' onClick={() => setModal(false)}>X</div>
                <div className='orientation'>
                  <div>
                    <img className='img-modal' src={chart.image} alt='Imagem do personagem em destaque' />
                  </div>
                  <div className='description-card'>
                    <label className='person-name'> {chart.name} </label>
                    <div className='status-orientation'>
                      <div className={chart.status}></div>
                      <label className='status-description'> {chart.status} </label>
                    </div>
                    <label className='sub-description'>G??nero:</label>
                    <label className='description-content'> {chart.gender} </label>
                    <label className='sub-description'>Primeira apari????o:</label>
                    <label className='description-content'> {chart.origin.name} </label>
                    <label className='sub-description'>Ultima apari????o:</label>
                    <label className='description-content'> {chart.location.name} </label>
                  </div>
                </div>
                <div className='persons-container'>
                  <div className='persons-orientation'>
                    {
                      rel.length ? (
                        <>
                          <div className='persons-title'>
                            <span>
                              Personagens relacionados
                            </span>
                          </div>
                          <div className='img-orientation'>
                            {
                              rel?.map((char) => {
                                return (
                                  <div className='img-card-orientation'>
                                    <div className='img-card'>
                                      <img className='img-rel' src={char.image} alt='Imagem de um persogem relacionado ao personagem em destaque' />
                                      <span className='name-description'> {char.name} </span>
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </>) : ('')
                    }
                  </div>
                </div>
              </div>
            </div>
          </>) : ('')
        }
      </div>
    </main>
    {data && !isError ? (
      <>
        <div className='card-container'>
          <div className='cards-orientation'>
            <div className='organize'>
              <div className='title-result'>
                <span>Resultados</span>
              </div>
              <div className='cards-view'>
                {
                  currentItens?.map((character) => {
                    return (
                      <>
                        <div className='cards-fill' key={character.id} onClick={() => handleModal(character.id)}>
                          <img className='img-card' src={character.image} alt={character.name} />
                          <div className='description-card'>
                            <label className='person-name'> {character.name} </label>
                            <div className='status-orientation'>
                              <div className={character.status}></div>
                              <label className='status-description'> {character.status} </label>
                            </div>
                            <label className='sub-description'>Primeira apari????o:</label>
                            <label className='description-content'> {character.episode[0]} </label>
                            <label className='sub-description'>Ultima apari????o:</label>
                            <label className='description-content'> {character.episode[character.episode.length - 1]} </label>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
              <div className='btn-page-orientation'>
                {
                  Array.from(
                    Array(pages), (item, index) => {
                      return <button value={index} onClick={(e) => scrollSmooth(e)} className={index === currentPage ? 'btn-active' : 'btn-page'}></button>

                    })
                }
              </div>
            </div>
          </div>
        </div>
        <div className='footer-search'>
          <span>??rickandmortyapi.com</span>
        </div>
      </>
    ) : isError ? (
      <div className='error-container'>
        <div className='error-orientation'>
          {
            isError && (
              <span>
                Nenhum personagem encontrado
              </span>
            )
          }
        </div>
      </div>
    ) : (
      <>
        <div className='img-container'>
          <img data-testid='image' src={imgCharacter} alt='Imagem dos personagens de desenho rick e morty' />
        </div><div className='footer'>
          <span data-testid='footer'>??rickandmortyapi.com</span>
        </div>
      </>
    )}

  </>
}

export default CharactersPage;