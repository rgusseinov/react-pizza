import React, {useEffect, useState} from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components'
import {useSelector, useDispatch} from 'react-redux'
import { setCategory } from '../redux/actions/filters'


function Home(){
  const dispatch = useDispatch()
  
  const items = useSelector(({ pizzas }) => pizzas.items)
  
  const onSelectCategory = index => {
    dispatch(setCategory(index))
  }

    return (
        <div className="container">
        <div className="content__top">
          <Categories 
            items={[
            'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
            ]} 
            onItemClick={onSelectCategory}  />
            
            <SortPopup 
              items={[
                {name: 'популярности', type: 'popular'},
                {name: 'цене', type: 'price'},
                {name: 'алфавиту', type: 'aplahabet'}
              ]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
                items.map((item) => <PizzaBlock key={item.id} {...item} />)
            }
            
             
        </div>
      </div>

    )
}

export default Home