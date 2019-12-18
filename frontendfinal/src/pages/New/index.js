import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');


  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])
  
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    

    await api.post('/spots', data, {
      headers: { user_id }
    })
    history.push('/dashboard');
  }

  return (    
    <form onSubmit={handleSubmit}>

      <label htmlFor="company">Nome do trator *</label>
      <input
        id="company"
        placeholder="Digite o nome do trator"
        value={company}
        onChange={event => setCompany(event.target.value)}
        />

<label htmlFor="techs">Nome do maquinário *</label>  
      <input
        id="techs"
        placeholder="Qual maquinário será utilizado?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
        />

<label 
      id="thumbnail" 
      style={{ backgroundImage: `url(${preview})` }}
      className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select img" />
      </label>

    <button type="submit" className="btn">Cadastrar</button>
    </form>
  )
}