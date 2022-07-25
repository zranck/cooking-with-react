import React from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';



function App() {
  return (
    <RecipeList recipes={sampleRecipes}/>
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
