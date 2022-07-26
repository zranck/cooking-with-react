import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import uuidv4 from 'uuid/v4'
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingwithreact.recipes'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(() => { 
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  })

  useEffect(() => {
    console.log('rendered effect')
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
  }, [recipes])
  
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);
 

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuidv4(), name: '', amount: '' }
      ]
  
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }
 

  function handleRecipeDelete(id){
    if(selectedRecipeId != null && selectedRecipeId === id ){
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id ))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
    
  )

  

}   



const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Duck',
    servings: 3,
    cookTime: '1.45',
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
        id:3,
        name:'horse',
        amount:'210 pounds'
      },
      {
        id:4,
        name:'Pepper',
        amount:'1 pound'
      }
    ]
  }
]

export default App;
