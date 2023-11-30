import { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Cards from './Cards'
import detail from './details'

 const App = () =>  {
  const cards = detail.map(item => {
    return (
        <Cards
            key={item.id}
            {...item}
            
        />
    )
})        
  return ( 
  <div className='container'>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
  </div>
  )
}

export default App;
