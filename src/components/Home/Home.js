import React from 'react'
import Product from '../Product/Product'
import { useState} from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import './home.css'
import Filter from '../Utils/Filter/Filter';



const Home = () => {
    const [recipes,setRecipies]=useState([])
    const [item,setItem]=useState('')
    const [state,setState]=useState(false)
    
    const filterDropdown=()=>{
       
        setState(true)
        console.log(state)
        
    }
    const apiCall = async(e) =>{
       e.preventDefault()
       console.log(item)
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${item}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    
         //console.log(url)
        const apidata = await fetch(url)
        const response = await apidata.json()
        //console.log(response.hits)
        setRecipies(response.hits)
        //console.log(recipes)
        setItem('')
    }
    // useEffect(()=>{
    //     apiCall(item)
    // },[apiCall,item])
  return (
    
    <div>
        
       
        <section className="searchbar">
            <h1 className='header'>Lets try out fun Recipes !!!!</h1>
            <form onSubmit={apiCall}>
            <input 
            className='search-box'
            value={item}
            type="text" 
            placeholder='let try out for some recipe'
            onChange={(e)=>setItem(e.target.value)}
            />
            <button 
            className="api"
            type='submit'
           
            onClick={()=>console.log('hi')}
            >
                <BiSearchAlt />
            </button>
            
            </form>
            <div className="filter">
            <span 
            className='btn'
            onClick={filterDropdown}
            >Refine Your Searches</span>
        </div>
            
            
            
            

        </section>
        
        <div className="filter-box">
        {state?<Filter val={state} setStatefunc={setState} recipe={setRecipies} food={item}/>:console.log("hi")}
        </div>
        <section className="results">
        {recipes.map((x,idx)=>{
                return(
                    <div className="item">
                         <Product {...x} keys={idx}/>
                    </div>
                   
                   
                )
            })}
            
        </section>
    </div>
  )
}



export default Home