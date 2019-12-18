import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Register({ history }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
/*
   async function handleSubmit(event) {
    event.preventDefault();

  const response = await api.post('/sessions', { email })

  const { _id } = response.data;

  localStorage.setItem('user', _id);

   history.push('/');
  
  }
*/
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await api.post("/Register", {
        email,
        senha
      });
      history.push("/");
    } catch (err) {
      console.log("response", err);
    }
  }


  return (
    <>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
            />

            <label htmlFor="senha">Senha:</label>
            <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={event => setSenha(event.target.value)}
            />

            <Link to="/">
          <button className="btn">Cadastrar</button>
            </Link>
        </form>
        </>
  );
}