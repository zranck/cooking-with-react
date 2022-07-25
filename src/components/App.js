import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import uuidv4 from 'uuid/v4'

export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'instruct',
      ingredients: [
        { id: uuidv4(), name: 'name', amount: '1 Tbsp' }
      ]
  
    }
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id ))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
    
  )

  

}   



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Duck',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. put in oven\n2. salt the chicken\n3. eat the chicken\n4. ???\n5. Profit',
    ingredients: [
      {
        id:1,
        name:'Chicken',
        amount:'2 pounds'
      },
      {
        id:2,
        name:'Salt',
        amount:'1 tsp'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Horse',
    servings: 8,
    cookTime: '2:25',
    instructions: '1. put in oven\n2. salt the horse\n3. eat the horse\n4. ???\n5. Profit',
    ingredients: [
      {
        id:1,
        name:'horse',
        amount:'210 pounds'
      },
      {
        id:2,
        name:'Pepper',
        amount:'1 pound'
      }
    ]
  }
]

export default App;
