import React, {useEffect, useState} from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components'
import {useSelector} from 'react-redux'


function Home(){

  const { items } = useSelector(({pizzas}) => {
    return {
      items: pizzas.items
    }
  })

    // const items = props.items
    return (
        <div className="container">
        <div className="content__top">
          <Categories 
            items={[
            'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
            ]} onItemClick={(name) => console.log(name)}  />
            
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