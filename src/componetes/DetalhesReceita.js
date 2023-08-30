import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipes } from '../api';

function DetalhesReceita() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipes().then((data) => {
      const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
      setRecipe(selectedRecipe);
    });
  }, [id]);

  if (!recipe) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>{recipe.titulo}</h2>
      <p>Ingredientes: {recipe.ingredientes}</p>
      <p>Modo de Preparo: {recipe.modoPreparo}</p>
    </div>
  );
}

export default DetalhesReceita;
