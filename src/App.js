import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ListaReceitas from './componetes/listareceitas';
import DetalhesReceita from './componetes/DetalhesReceita';
import AddReceita from './componetes/AddReceita';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Adicionar Receita</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <ListaReceitas recipes={recipes} />
          </Route>
          <Route path="/recipe/:id">
            <DetalhesReceita />
          </Route>
          <Route path="/add">
            <AddReceita onAddRecipe={handleAddRecipe} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
