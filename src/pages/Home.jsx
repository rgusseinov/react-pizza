import React, {useEffect, useState} from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components'


function Home(props){
    // console.log(props)
    const items = props.items
    return (
        <div className="container">
        <div className="content__top">
          <Categories 
            items={[
            'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
            ]} onItemClick={(name) => console.log(name)}  />
            
            <SortPopup items={['популярности', 'цене', 'алфавиту']} />
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