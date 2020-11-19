import React, {useEffect, useState} from 'react'
import './scss/app.scss'
import {Route} from 'react-router-dom'
import {Header} from './components'
import {Home, Cart} from './pages'
import axios from 'axios'

function App(){

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
 
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas)
    })
    
/*       fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then((data) => setPizzas(data.pizzas)) */
      
  }, [])

  // console.log(`data=`, pizzas)
 
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={() => <Home items={pizzas} />} exact />
          <Route path="/cart" component={Cart} exact /> 
        </div>
      </div>
    );
 
  
}


export default App;
