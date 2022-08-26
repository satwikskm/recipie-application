import React from 'react'
import {useLocation} from 'react-router-dom';
import './productinfo.css'

const ProductInfo = () => {
    const location = useLocation()
     console.log(location)
     const product = location.state
  return (
    <div className='Product-Info'>
        <div className="image-card">
            <div className="product-image">
                <img src={product.recipe.images.REGULAR.url} alt="" />
            </div>
            <div className="product-links">
                <h2>{product.recipe.label}</h2>
                
                <p className="recipe"><a href={product.recipe.url}>Read the full recipe at {product.recipe.source}</a></p>
            </div>

        </div>
        <div className="product-details">
            <div className="making">
                <h3 className='ingredients-head'>Ingredients :{product.recipe.ingredients.length}</h3>
                <div className="ingredients">
                {product.recipe.ingredientLines.map((item,idx)=>{
                    return(
                        <li> 👉 {idx} : {item}</li>
                    )
                })}

                </div>
                
            </div>
            <div className="nutrition">
                <div className="nutrition-head">
                    <h2>Others</h2>

                </div>
                <div className="ratings">
                <div>
                    <h3>{Math.floor(product.recipe.yield)}</h3>
                    <h4>Servings</h4>

                    </div> 
                    <div>
                    <h3>{Math.floor(product.recipe.calories)}</h3>
                    <h4>Calories</h4>

                    </div>
                    <div>
                    <h3>{Math.floor(product.recipe.totalDaily.ENERC_KCAL.quantity)}</h3>
                    <h4>Energy</h4>

                    </div>   
                
                </div>
                
                <div className="health-label">
                    
                    {product.recipe.healthLabels.map((x)=>{
                        return(
                            <div className="health-label-items">
                                {x}
                            </div>
                           
                        )
                    })}
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductInfo