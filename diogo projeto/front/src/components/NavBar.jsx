import React from "react"
import { Link } from "react-router-dom"
import './NavBar.css'
function NavBar() {
  return (
    <div id='NavBar'>
       <nav>
          <div className="div1">
            <Link to="/"><button className="NavBar1">Home </button></Link>
          </div>
          <div className="div2">
            <Link to="/agenda"><button className="NavBar2">Agendar </button></Link>
          </div>
          <div className="div2">
            <Link to="/medico"><button className="NavBar2">Médico </button></Link>
          </div>
       </nav>
    </div>
  )
}
export default NavBar