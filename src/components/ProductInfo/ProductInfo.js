import React from 'react'
import {useLocation} from 'react-router-dom';

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
                
                <p className="recipe"><a href={product.recipe.url}>Product</a></p>
            </div>

        </div>
        <div className="product-details">
            <div className="making">
                <h3>Ingredients :{product.recipe.ingredients.length}</h3>
                {product.recipe.ingredientLines.map((item,idx)=>{
                    return(
                        <li>{idx} : {item}</li>
                    )
                })}
            </div>
            <div className="nutrition">
                <p>servings : {product.recipe.yield}</p>
                <p>Calories : {product.recipe.calories}</p>
                <p>Energy : {product.recipe.totalDaily.ENERC_KCAL.quantity}</p>
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