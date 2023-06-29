import React from "react"
import './Home.css'
import baner from './imagens/banner.jpg'
function Home() {
  

  return (
    <div id='meio'>
      <div className="divfoto">
        <img src={baner} title="banner" className="foto"></img>
      </div>
      <div className="texto">
        <div className="titulo">
          Bem Vindo ao Tele-Saúde
          <br></br><br></br>
        </div>
        Descubra o poder da comodidade e eficiência: liberte-se das filas e agendamentos demorados. Nosso sistema de marcação de consultas online coloca o controle da sua saúde em suas mãos, proporcionando um novo horizonte de conveniência e agilidade
      </div>
    </div>
  )
}
export default Home