import React from 'react'
import SearchBar from '../utils/SearchBar'
import BurgerSession from '../layouts/BurgerSession'
import Product from '../layouts/Product';


const Home = (handleAddToCart) => {

  return (
   <>
   <main className='bg-[#2F2F2F]'>
    <article className='wrapper'>

  
      <section>
        <div>
          {/* <SearchBar/> */}
        </div>
        
        <div>
         {/* <BurgerSession/>   */}
        </div>
        <div>
          <Product handleAddToCart = {handleAddToCart} />
        </div>

      </section>

    </article>

    
   </main>
   </>
  )
}

export default Home