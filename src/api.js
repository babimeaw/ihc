import recipesData from './recipesData.json';

export function getRecipes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recipesData);
    }, 500);
  });
}
