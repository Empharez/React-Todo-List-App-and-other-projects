import React from 'react';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header'
import WordClock from './components/WordClock';
import TodoList from './components/TodoList'
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokesData from './jokesData'
import Product from './components/Products';
import products from './vschoolProducts'
import CheckState from './components/states';


function App() {
  const jokeComponents =  jokesData.map(joke => {
    return(
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
    )
  })
  
  const productComponents = products.map(product => {
    return(
      <Product key={product.id} name={product.name} price={product.price} description={product.description}/>
    )
  })

  

  return (
   <div>
      <Header/>

      <WordClock/>

      <TodoList/>
      <CheckState/>      

      <div>
        {jokeComponents}
      </div>
      <div>
        {productComponents}
      </div>

     <div className="contact-card">
       <ContactCard 
          name="Mr Whiskerson"
          imgUrl="https://placekitten.com/300/200"
          phone="(212) 555-1234"
          email="mrwhikaz@catnap.meow"
        />
       <ContactCard 
          name="Fluffyking"
          imgUrl="https://placekitten.com/400/200"
          phone="(212) 555-2345"
          email="fluff@me.com"
       />
       <ContactCard 
          name="Destroyer"
          imgUrl="https://placekitten.com/400/300"
          phone="(212) 555-3456"
          email="offworlds@yahoo.com"
       />
       <ContactCard 
          name="Felix"
          imgUrl="https://placekitten.com/200/100"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
       />
     </div>
     <MainContent/>
     <Footer/>
    </div>
  );
}

export default App;
