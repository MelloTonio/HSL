import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { Redirect } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'

/*    
  <StyledInput
    type="text"
    name="area"
    value={state.area}
    onChange={handleInput}
  />
*/

import './Form.css'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #66FF00, #e1eec3);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledSelect = styled.select` 
 display: block;
width: 100%;
${sharedStyles}`

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const centerFlex = styled.div`
  display: flex;
  border: 1px solid black;
  background-color: black;
`

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

let initalState = {
  name: '',
  endereco: '',
  cpf: '',
  telefone: '',
  med: '',
  qtdPessoa: ''
};

function App() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [trat, setTrat] = useState('')
  const [crianIdos, setCrianIdos] = useState('')

  /* <Redirect to={{
            pathname: '/order',
            state: { id: '123' }
        }}
    /> */


  async function sendData(user) {
    try {
      toast.success("Sucesso! Aguarde ser redirecionado")
      
    } catch (e) {
      toast.error("Erro ao cadastrar!")
    }
  }

  const handleSubmit = e => {

    e.preventDefault();
    console.log('submitted!');
    console.log(state);

    for (let key in state) {
      if (state[key] === '') {

        if (state[key])
          console.log(state[key])

        setError(`You must provide the ${key}!`)

        return
      }
    }
    setError('');
    // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // const test = regex.test(state.email);
    // console.log(test);

    const newUser = {
      "Nome": state.name,
      "CPF": state.cpf,
      "Endereço": state.endereco,
      "Telefone": state.telefone,
      "Faz_Tratamento?": trat,
      "Possui_Criança_Idoso": crianIdos,
      "Faz_Uso_Medicamento": state.med,
      "Quantidade": state.qtdPessoa,
    }

    sendData(newUser)

  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
      <ToastContainer draggable={false} transition={Zoom} autoClose={5000} position={'top-center'}></ToastContainer>
        <StyledForm onSubmit={handleSubmit}>
          <div className="centerFlex">
            <h2 className="mg-top-title">Formulário de Registro<div className="resize2"><p>Campos marcados com * não são obrigatórios<a to="/login"></a></p></div></h2><img height="150" width="150" src="https://cdn.discordapp.com/attachments/703950158659846145/825124321532968980/indice.jpg" />
          </div>
          <br></br>

          <br></br>
          <label htmlFor="name">Nome</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="cpf">CPF *</label>
          <StyledInput
            type="text"
            name="cpf"
            value={state.cpf}
            onChange={handleInput}
          />
          <label htmlFor="telefone">Telefone</label>
          <StyledInput
            type="text"
            name="telefone"
            value={state.telefone}
            onChange={handleInput}
          />
          <label htmlFor="endereco">Endereço</label>
          <StyledInput
            type="text"
            name="endereco"
            value={state.endereco}
            onChange={handleInput}
          />
          <label htmlFor="qtdPessoa">Quantidade de pessoas que compartilham a residência</label>
          <StyledInput
            type="text"
            name="qtdPessoa"
            value={state.qtdPessoa}
            onChange={handleInput}
          />
          <label htmlFor="med">Faz uso de medicamentos? *</label>
          <StyledInput
            type="text"
            name="med"
            value={state.med}
            onChange={handleInput}
          />
          <label htmlFor="trat">Realiza algum tipo de tratamento? *</label>
          <select onChange={(e) => setTrat(e.target.value)} className="style-select">
            <option>- Selecione -</option>
            <option>Sim</option>
            <option>Não</option>
          </select>
          <label htmlFor="email">Possui Crianças ou Idosos em casa? </label>

          <select onChange={(e) => setCrianIdos(e.target.value)} className="style-select">
          <option>- Selecione -</option>
            <option>Sim</option>
            <option>Não</option>
          </select>



          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Avançar</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default App;