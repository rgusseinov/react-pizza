import React from 'react'
import './scss/app.scss'
import {Route} from 'react-router-dom'
import {Header} from './components'
import {Home, Cart} from './pages'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setPizzas} from './redux/actions/pizzas'

function App() {

  const dispatch = useDispatch()


  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {

      dispatch(setPizzas(data.pizzas))
      // console.log(`data.pizzas`, data.pizzas)

    })
  }, [])

  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact /> 
    </div>
  </div>
  )
}

/* const mapStateToProps = (state) => {
  // console.log(`items`, state.pizzas.items)
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); */


export default App


/* class App extends React.Component {
  
  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render(){
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
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)) 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
 */