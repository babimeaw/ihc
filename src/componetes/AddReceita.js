import React, { useState } from 'react';

function AddReceita({ onAddRecipe }) {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      titulo,
      ingredientes,
      modoPreparo,
    };
    onAddRecipe(newRecipe);
    setTitulo('');
    setIngredientes('');
    setModoPreparo('');
  };

  return (
    <div>
      <h2>Adicionar Nova Receita</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <label>
          Ingredientes:
          <textarea value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} />
        </label>
        <label>
          Modo de Preparo:
          <textarea value={modoPreparo} onChange={(e) => setModoPreparo(e.target.value)} />
        </label>
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default AddReceita;
