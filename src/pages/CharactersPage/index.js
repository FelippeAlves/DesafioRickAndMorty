import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import trailing from '../../assets/icons/lupa-icon.svg'
import arrow from '../../assets/icons/arrow-down.svg'
import xIcon from '../../assets/icons/x-icon.png'
import imgCharacter from '../../assets/imgs/Rick-and-Morty-characters-page.png'

import './style.scss';

function CharactersPage() {
  const [statusVisible, setStatusVisible] = useState(false)
  const [genderVisible, setGenderVisible] = useState(false)
  const [status, setStatus] = useState('')

  const selectStatus = () => {
    setStatusVisible(!statusVisible)
    setGenderVisible(false)
  }

  return <>
        <Header />
      <main>
        <div className='m-container'>
          <div className='content'>
            <span>
                Buscar personagem
            </span>
          </div>
          <div className='forms-container'>
            <div>
              <label className='first-description'>
                Buscar Personagens
              </label>
              <div className='box-form'>
                <input className='input-text' type="text" />
                <img className='trailing-icon' src={ trailing } />
              </div>
            </div>

            <div className='small-box-container'>
              <div>
                <label className='description'>
                  Status
                </label>
                <div className='box-form-small'>
                  <label className='input-text' id='status' onClick={() => selectStatus()}> {status} </label>
                  {status ? (
                    <img className='x-icon' onClick={() => setStatus('')} src={ xIcon } />
                    ) : (
                      <img className='arrow-down' src={ arrow } onClick={() => selectStatus()} />
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
                  Gênero
                </label>
                <div className='box-form-small' onClick={() => {
                  setGenderVisible(!genderVisible)
                  setStatusVisible(false)
                  }}>
                  <label className='input-text'></label>
                  <img className='arrow-down' src={ arrow } />
                </div>
                  <ul className={genderVisible ? 'statusOpen' : 'statusClose'}>
                    <li>Female</li>
                    <li>Male</li>
                    <li>Genderless</li>
                  </ul>
              </div>
            </div>
          </div>

          <div className='img-container'>
            <img src={ imgCharacter } />
          </div>
          <div className='footer'>
            <span>©rickandmortyapi.com</span>
          </div>
        </div>
      </main>
        
    </>
}

export default CharactersPage;