import React from 'react'
import { useNavigate} from 'react-router-dom'
import './product.css'

const Product = (props) => {
  const navigate = useNavigate()
  const productItem = () =>{
    console.log('click')
    navigate('/products',{state:props})
  }
  return (
    <div 
    className='card'
    onClick={()=>productItem()}
    >
        <img src={props.recipe.image} alt="" />
        <h1>{props.recipe.label}</h1>
        <p>Calories : {Math.floor(props.recipe.calories)}</p>
        <p>Ingirdients : {props.recipe.ingredients.length}</p>
        <p className='band'>{props.recipe.source}</p>
       
    </div>
  )
}

export default Product