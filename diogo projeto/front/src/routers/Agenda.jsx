import React from "react"
import axios from 'axios'
import { useState } from 'react'
import './agenda.css'

function Agendar() {
  //declaração de variaveis de estado
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [cpf, setCpf] = useState(0)
  const [data, setData] = useState(0)
  const [horario, setHorario] = useState('08:00')
  const [motivo, setMotivo] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  async function addUsers() {
    try {
      //enviar dados do formulário para o banco de dados
      const response = await axios.post("http://127.0.0.1:8000/Agendamentos/", { nome: nome, idade: idade, cpf: cpf, data: data, horario: horario, motivo: motivo })
      console.log(response.data)
      // Limpar mensagens de erro e sucesso, se houverem
      setErrorMessage('')
      setSuccessMessage('Agendamento efetuado com sucesso!')
    } catch (error) { //utilizado se ocorrer algum erro durante durante a requisição feita com o axios.post
      if (error.response && error.response.data && error.response.data.detail) {
        setErrorMessage(error.response.data.detail) //define a mensagem de erro com base na resposta da API
      } else {
        setErrorMessage('Ocorreu um erro ao processar o agendamento.')
      }
      setSuccessMessage('') 
    }
  }
  
  return (
    <div id='agendar'>
      <h1>Agendamento da Consulta</h1><br/>
      <table align="center" >
        <tr>
          <td width={100} height={50}>
            Nome:
          </td>
          <td>
            <input type="text" className="input" onChange={(e) => setNome(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td width={100} height={50}>
            Idade:
          </td>
          <td>
            <input type="number" className="input" onChange={(e) => setIdade(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td width={100} height={50}>
            CPF:
          </td>
          <td>
            <input type="number" className="input" onChange={(e) => setCpf(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td width={100} height={50}>
            Data:
          </td>
          <td>
            <input type="date" className="date" onChange={(e) => setData(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td width={100} height={50}>
            Horario:
          </td>
          <td>
            <select name='horarios' id='horarios' className="select" onChange={(e) => setHorario(e.target.value)}>
              <option value={'08:00'}>08:00</option>
              <option value={'09:00'}>09:00</option>
              <option value={'10:00'}>10:00</option>
              <option value={'11:00'}>11:00</option>
              <option value={'13:00'}>13:00</option>
              <option value={'14:00'}>14:00</option>
              <option value={'15:00'}>15:00</option>
              <option value={'16:00'}>16:00</option>
              <option value={'15:00'}>17:00</option>
            </select>
          </td>
        </tr>
        <tr>
          <td width={100} height={50}>
            Motivo:
          </td>
          <td>
            <input type="text" className="input" onChange={(e) => setMotivo(e.target.value)} />
          </td>
        </tr>
      </table>
      <br/>
      <button onClick={addUsers} id='botao'>
        Agendar
      </button>
      {/*mensagem é exibida com base nos valores das variáveis de estado successMessage e errorMessage. Se algum dos valores for uma string não vazia, a mensagem correspondente será exibida. */}
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default Agendar
