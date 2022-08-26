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
      <div className="image-holder">
      <img src={props.recipe.image} alt="" />
        <h1 className='card-label'>{props.recipe.label}</h1>

      </div>
        
        <div className="info-holder">
        
        <div className="calories card">
          <h3>Calories :</h3>
          <p> {Math.floor(props.recipe.calories)}</p>
        </div>
        <div className="ingredients card">
          <h3>Ingirdients   <p className='round'>{props.recipe.ingredients.length}</p></h3>
        
        </div>
        
        
       

        </div>
        <p className='band'>{props.recipe.source}</p>
       
    </div>
  )
}

export default Product