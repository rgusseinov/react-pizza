import React, {useEffect, useState} from 'react'
import './scss/app.scss'
import {Route} from 'react-router-dom'
import {Header} from './components'
import {Home, Cart} from './pages'
import axios from 'axios'
import {connect} from 'react-redux'
// import store from './redux/store'
import {setPizzas as setPizzasAction} from './redux/actions/pizzas'

/* function App(){

  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas)
    })
  }, [])

    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={() => <Home items={pizzas} />} exact />
          <Route path="/cart" component={Cart} exact /> 
        </div>
      </div>
    );

} */

class App extends React.Component {
  
  // const [pizzas, setPizzas] = useState([])

  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.sohranitPizi(data.pizzas)
      // console.log(`data`, data.pizzas)
    })
  }
  render(){
    // console.log(this.props.items)

    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact /> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(`items`, state.pizzas.items)
  return {
    items: state.pizzas.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sohranitPizi: (items) => dispatch(setPizzasAction(items)) 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
