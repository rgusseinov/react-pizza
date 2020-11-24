import React, {useEffect, useState} from 'react'
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from '../components'
import {useSelector, useDispatch} from 'react-redux'
import { setCategory } from '../redux/actions/filters'
import {setPizzas, fetchPizzas} from '../redux/actions/pizzas'


const catogoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'aplahabet'}
]

function Home(){
  const dispatch = useDispatch()  
  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)

  React.useEffect(() => {
    // Перенести в Redux и подключить redux-thunk
    // Следить за фильтрацией и сортировкой и подставлять параметры в URL из Redux
    // Сделать имитацию загрущки пицц (которая есть в CSS и в PizzaBlock)
    // console.log(fetchPizzas())

    // Убираем лишную загрузку json данных. Если пиццы в redux уже есть то не нужно
    // if (!items.length){
      // console.log(`items`, items)
      dispatch(fetchPizzas())

    // }
    
  }, [])


  const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
  }, [])

    return (
        <div className="container">
        <div className="content__top">
          <Categories 
            items={catogoryNames} 
            onItemClick={onSelectCategory}  />
            
            <SortPopup 
              items={sortItems} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            { isLoaded 
              ? items.map((item) => <PizzaBlock isLoading={true} key={item.id} {...item} />)
              : Array(12).
              fill(0).
              map((_, index) => <PizzaLoadingBlock key={index} />)
            }             
        </div>
      </div>

    )
}

export default Home