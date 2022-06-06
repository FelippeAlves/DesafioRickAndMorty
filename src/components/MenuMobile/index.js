import React, { useState } from 'react'
import './styles.scss'
import { Link } from "react-router-dom";

export default function MenuMobile() {
  const [active, setActive] = useState(false)

  return (
    <>
      <div className={active ? "icon iconActive" : "icon"} onClick={() => setActive(!active)}>
        <div className='hamb hambIcon'></div>
      </div>
      <div className={active ? "menuOpen" : "menuClose"}>
        <nav className="list">
          <Link className='buttons space-itens' to="/personagens">Personagens</Link>
          <Link className='buttons space-itens' to="/lugares-famosos">Lugares Famosos</Link>
          <Link className='buttons' to="/episodios">Episódios</Link>
        </nav> 
      </div>
    </>
    
  )
}
