import Hashtaurante from "./assets/hashtaurante.webp"
import "./App.css"
import { Navigation } from "./Navigation"
import { MenuItem } from "./MenuItem"
import { pratosPrincipais, sobremesas, bebidas } from "./menu"
import { useState } from "react"


export function App() {
  const menuPages = [pratosPrincipais, sobremesas, bebidas]
  const [selectedPage, setSelectedPage] = useState(0)

  return <>
    <img src={Hashtaurante} alt="Imagem de capa do restaurante" className="capa" />
    <Navigation setSelectedPage={setSelectedPage} />
    <div className="menu">
      {menuPages[selectedPage].map(item => <MenuItem key={item.nome} nome={item.nome} preco={item.preco} imagem={item.imagem} descricao={item.descricao} />)}
    </div>
  </>
}