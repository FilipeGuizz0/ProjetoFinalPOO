import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import logo from './routers/imagens/logo.png'

function App() {
 

  return (
    <div className='App'>
      <div id='topo'>
         <img src={logo} title='logo' className='logo'></img> &nbsp;
         Tele-Saúde
         
      </div> <br/><br/>
      <NavBar/>
      
      <Outlet/>

      <div id='rodape'>
        © Desenvolvido por Diogo Kulckamp Alberton e Filipe Guizzo
      </div>
       
    </div>
  )
}

export default App

