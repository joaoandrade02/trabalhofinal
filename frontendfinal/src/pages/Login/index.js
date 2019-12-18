import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
/*
export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(''); 

   async function handleSubmit(event) {
    event.preventDefault();

  const response = await api.post('/sessions', { email, senha })

  const { _id } = response.data;

  localStorage.setItem('user', _id);

   history.push('/dashboard');
  }
*/
  export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/sessions", {
        email,
        senha
      });
      
      const { token, user: userData } = response.data;
      if (token) {
        localStorage.setItem("@MAQUINARIOS/token", token, userData);
      }
      history.push("/dashboard");
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


            <button className="btn" type="submit">Entrar</button>

            <Link to="/Register">
          <button className="btn">Cadastrar</button>
            </Link>
        </form>
        </>
  );
}
