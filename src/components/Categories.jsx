import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(

    function Categories({activeCategory, items, onClickCategory}){

       /*  let [activeItem, setActiveItem] = useState(null)   */
/* 
        const onSelectItem = (index) => {
            // setActiveItem(index)
            onItemClick(index)
        } */
    

        // console.log(activeCategory)

        return (
            <div>
                <div className="categories">
                  <ul>
                    <li 
                        className={activeCategory === null ? 'active' : ''}
                        onClick={() => onClickCategory(null)}
                    >Все</li>
                    {
                        items && items.map((name, index) => 
                            <li
                                className={activeCategory === index  ? 'active' : ''}
                                onClick={() => onClickCategory(index)}
                                key={`${name}_${index}`}>{name}
                            </li>
                        )
                    }
                  </ul>
                </div>
            </div>
        )
    }
)

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
};
  
Categories.defaultProps = { activeCategory: null, items: [] };
  


export default Categories