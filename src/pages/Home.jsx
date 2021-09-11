import React, {useEffect, useState} from 'react'
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from '../components'
import {useSelector, useDispatch} from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import {setPizzas, fetchPizzas} from '../redux/actions/pizzas'
import {} from '../redux/actions/cart'


const catogoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name: 'популярности', type: 'popular', order: 'desc'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'}
]

function Home(){
  
  const dispatch = useDispatch()  
  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  React.useEffect(() => {
    // Перенести в Redux и подключить redux-thunk
    // Следить за фильтрацией и сортировкой и подставлять параметры в URL из Redux
    // Сделать имитацию загрущки пицц (которая есть в CSS и в PizzaBlock)

    // Убираем лишную загрузку json данных. Если пиццы в redux уже есть то не нужно
    // if (!items.length){
      // console.log(`items`, items)
      dispatch(fetchPizzas(sortBy, category))

    // }
    
  }, [category, sortBy])


  const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
  }, [])

  // Сортировка по популярности и алфавиту
  const onSelectSortType = React.useCallback((type) => {
      dispatch(setSortBy(type))
  }, [])

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    })
  }

  console.log(`sortBy`, sortBy)

    return (
        <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            onClickCategory={onSelectCategory}
            items={catogoryNames}
          />
            
            <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            { isLoaded 
              ? items.map((item) => 
                  <PizzaBlock onClickAddPizza={handleAddPizzaToCart}
                              addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                              key={item.id}
                              {...item} />)
              : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
            }             
        </div>
      </div>

    )
}

export default Home