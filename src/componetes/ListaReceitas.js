import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecipes } from '../api';

function ListaReceitas() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((data) => {
      setRecipes(data);
    });
  }, []);

  return (
    <div>
      <h2>Lista de Receitas</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaReceitas;
