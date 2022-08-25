import React from 'react'
import { useState} from 'react'
import './filter.css'
const Filter = (props) =>{
    const [dietList,setDietList]=useState([])
    const [healthList,setHealthList]=useState([])
    const [cusineList,setCusineList]=useState([])
    const [mealList,setMealList]=useState([])
    const[caloriesMin,setMinCalories]=useState(0)
    const[caloriesMax,setMaxCalories]=useState(0)
    
    const submitHandler = async(e)=>{
        e.preventDefault()
        let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${props.food}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
        if(dietList.length > 0){
        for(let i=0;i<dietList.length;i++){
            url=url+`&diet=${dietList[i]}`
        }
        }
        if(healthList.length > 0){
            for(let i=0;i<healthList.length;i++){
                url=url+`&health=${healthList[i]}`
            }

        }
        if(cusineList.length > 0){
            for(let i=0;i<cusineList.length;i++){
                url=url+`&cuisineType=${cusineList[i]}`
            }

        }
        if(mealList.length > 0){
            for(let i=0;i<mealList.length;i++){
                url=url+`&mealType=${mealList[i]}`
            }

        }
        if(caloriesMin < caloriesMax && caloriesMax >= 0 && caloriesMin >=0){
            url=url+`&calories%3D${caloriesMin}-${caloriesMax}`
        }
        else{
            alert("Calories cannot be negative and minimum value will be more than maximum value")
        }
        console.log(url)
        const apidata = await fetch(url)
        const response = await apidata.json()
        console.log(response.hits)
        props.recipe(response.hits)
        console.log(props.recipes)
        props.setStatefunc(false)

        
        



    }
    const dietSetting = (item)=>{
        console.log("diet")
        // setDiet(item)
        console.log(item)
        setDietList([...dietList,item])
         console.log(dietList,"dl")
    }
    const dietRemove = (item) =>{
        console.log("remove",dietList)
        const newList = dietList.filter((x)=>x !== item)
        setDietList(newList)
    }
    const healthSetting = (item)=>{
        
        setHealthList([...healthList,item])
        
    }
    const healthRemove = (item) =>{
       
        const newList = healthList.filter((x)=>x !== item)
        setHealthList(newList)
    }
    const cusineSetting = (item)=>{
        
        setCusineList([...cusineList,item])
        
    }
    const cusineRemove = (item) =>{
       
        const newList = cusineList.filter((x)=>x !== item)
        setCusineList(newList)
    }
    const mealSetting = (item)=>{
       
        // setDiet(item)
        
        setMealList([...mealList,item])
    }
         
    const mealRemove = (item) =>{
        
        const newList = mealList.filter((x)=>x !== item)
        setMealList(newList)
    }
    if(props.val){
        return(
            <div className="filter-screen">
                
                <button 
                className="close"
                onClick={()=>props.setStatefunc(false)}
                >X</button>
                <form onSubmit={submitHandler}
                
                >
                <div className="filter-panel">
                    <section className="calories">
                    <h1>Calories</h1>
                        <ul className='cal-list'>
                            <li><label htmlFor="To">To <input 
                        type="text"
                        label="To" 
                        className='to'
                        onChange={(e)=>setMinCalories(e.target.value)}
                        
                        /></label></li>
                        <li> <label htmlFor="To">From<input 
                        type="text"
                        label="From" 
                        onChange={(e)=>setMaxCalories(e.target.value)}
                        /></label></li>
                        </ul>
                       
                        
                       
                       
                        
                    </section>
                    <div className="health">
                        <h2>Health</h2>
                        <div className="form-group">
                        <label htmlFor="Vegetarian">Vegetarian</label>
                        <input 
                        type="checkbox"
                        label="Vegetarian" 
                        onChange={(e)=>{e.target.checked?healthSetting('vegetarian'):healthRemove('vegetarian')}}
                        />

                        </div>
                        <div className="form-group">
                        <label htmlFor="Vegan">Vegan</label>
                        <input 
                        type="checkbox"
                        label="Vegan" 
                        className='vegan'
                        onChange={(e)=>{e.target.checked?healthSetting('vegan'):healthRemove('vegan')}}

                        />
                        
                        </div>
                        <div className="form-group">
                        <label htmlFor="Paleo">Paleo</label>
                        <input 
                        type="checkbox"
                        label="Paleo" 
                        className='paleo'
                        onChange={(e)=>{e.target.checked?healthSetting('paleo'):healthRemove('paleo')}}

                        />
                            
                        </div>
                    </div>    
                    <div className="diet">
                        <h2>Diet</h2>
                        <div className="form-group">

                        <label htmlFor="High-Fiber">High-Fiber</label>
                        <input 
                        type="checkbox"
                        label="High-Fiber" 
                        className='hf'
                        onChange={(e)=>{e.target.checked?dietSetting('high-fiber'):dietRemove('high-fiber')}}

                        />

                        </div>

                        <div className="form-group">
                        <label htmlFor="Low Carb">Low Carb</label>
                        <input 
                        type="checkbox"
                        label="Low Carb" 
                        className='lc'
                        onChange={(e)=>{e.target.checked?dietSetting('low-carb'):dietRemove('low-carb')}}

                        />

                        </div>
                        
                        <div className="form-group">
                        <label htmlFor="High-Protein">High-Protein</label>
                        <input 
                        type="checkbox"
                        label="High-Protein" 
                        onChange={(e)=>{e.target.checked?dietSetting('high-protein'):dietRemove('high-protein')}}

                        />

                        </div>
                        
                        
                    </div>
                    <div className="cusine">
                    <h2>Cusines</h2>
                        <div className="form-group">
                        <label htmlFor="Indian">Indian</label>
                        <input 
                        type="checkbox"
                        label="Vegetarian" 
                        className='in'
                        onChange={(e)=>{e.target.checked?cusineSetting('Indian'):cusineRemove('Indian')}}
                        />

                        </div>
                        <div className="form-group">
                        <label htmlFor="Italian">Italian</label>
                        <input 
                        type="checkbox"
                        label="Italian" 
                        className='it'
                        onChange={(e)=>{e.target.checked?cusineSetting('Italian'):cusineRemove('Italian')}}

                        />
                        
                        </div>
                        <div className="form-group">
                        <label htmlFor="Mexican">Mexican</label>
                        <input 
                        type="checkbox"
                        label="Mexican" 
                        className='mn'
                        onChange={(e)=>{e.target.checked?cusineSetting('Mexican'):cusineRemove('Mexican')}}

                        />
                            
                        </div>

                        <div className="form-group">

                        <label htmlFor="Chinese">Chinese</label>
                        <input 
                        type="checkbox"
                        label="Chinese" 
                        className='cs'
                        onChange={(e)=>{e.target.checked?cusineSetting('Chinese'):cusineRemove('Chinese')}}

                        />

                        </div>
                        
                    </div>
                    
                    <div className="meal">
                        <h2>Meal</h2>
                        <div className="form-group">
                        <label htmlFor="Breakfast">Breakfast</label>
                        <input 
                        type="checkbox"
                        label="Vegetarian" 
                        onChange={(e)=>{e.target.checked?mealSetting('Breakfast'):mealRemove('Breakfast')}}

                        />

                        </div>
                        <div className="form-group">
                        <label htmlFor="Dinner">Dinner</label>
                        <input 
                        type="checkbox"
                        label="dinner" 
                        onChange={(e)=>{e.target.checked?mealSetting('Dinner'):mealRemove('Dinner')}}

                        />

                        </div>
                        <div className="form-group">
                        <label htmlFor="lunch">Lunch</label>
                        <input 
                        type="checkbox"
                        label="lunch" 
                        onChange={(e)=>{e.target.checked?mealSetting('Lunch'):mealRemove('Lunch')}}

                        />
                       
                        </div>

                        <div className="form-group">
                        <label htmlFor="Snack">Snack</label>
                        <input 
                        type="checkbox"
                        label="High-Fiber" 
                        onChange={(e)=>{e.target.checked?mealSetting('Snack'):mealRemove('Snack')}}

                        />

                        </div>
                        
                        
                        

                    </div>
                    </div>
                    <button
                    className='btn-large'
                    type='submit'
                    onClick={()=>console.log("Submitted")}
                    >Done</button>
                    
                </form>
                
            </div>
            
        )

    }
    
}



export default Filter