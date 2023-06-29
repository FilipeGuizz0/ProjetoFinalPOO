import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './medico.css';

const Apoiadores = () => {
  const [data, setData] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(true);

  function renderizar() {
    axios
      .get('http://127.0.0.1:8000/Agendamentos/')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }

  useEffect(renderizar, []);

  const handleLogin = () => {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (username === 'admin' && password === 'admin') {
      setShowLoginPopup(false);
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="container">
      {showLoginPopup && (
        <div className="login-popup">
          <h2>Login 🔒</h2>
          <input type="text" placeholder="Usuário" /> <br/>
          <input type="password" placeholder="Senha" /> <br/>
          <button onClick={handleLogin}>Entrar</button> <br/><br/><br/><br/><br/><br/>
        </div>
      )}

      {!showLoginPopup && (
        <>
          <h1>Consultas marcadas</h1>
          <div className="appointments-container">
            {data.map(item => (
              <div className="card" key={item.id} id={item.id}>
                Paciente: {item.nome}
                <br />
                Idade: {item.idade}
                <br />
                CPF: {item.cpf}
                <br />
                Data: {item.data}
                <br />
                Horario: {item.horario}
                <br />
                Motivo: {item.motivo}
                <br />
                <br />
                <button
                  className="delete-button"
                  onClick={e => {
                    axios
                      .delete(`http://127.0.0.1:8000/Agendamentos/${e.target.parentElement.id}/`)
                      .then(() => renderizar())
                      .catch(error => console.log(error));
                  }}
                >
                  Rejeitar
                </button>
              </div> 
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Apoiadores;
