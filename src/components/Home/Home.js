import React from 'react'


const Home = () => {
    const apiCall = (item) =>{
        console.log()
        //const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${item}&app_id=${env}&app_key=${env}`
        //console.log(url)
    }
  return (
    
    <div>
        <h2>Home page</h2>
        <section className="searchbar">

        </section>
        <section className="results">
            <button 
            className="api"
            onClick={()=>apiCall("chicken")}
            >
                Result
            </button>
        </section>
    </div>
  )
}

export default Home