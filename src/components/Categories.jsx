import React from 'react'

function Categories({items, onItemClick}){

    return (
        <div>
            <div className="categories">
              <ul>
                <li className="active">Все</li>
                {
                    items.map((name, index) => 
                        <li
                            onClick={() => onItemClick(name)} 
                            key={`${name}_${index}`}>{name}
                        </li>
                    )
                }
              </ul>
            </div>
        </div>
    )
}


/* class Categories extends React.Component {

    state = {
        activeItem: 2
    }

    onItemClick = (index) => {
        this.setState({
            activeItem: index
        })
    }

    render() {
        const {items, onItemClick} = this.props

        return (
            <div>
                <div className="categories">
                  <ul>
                    <li>Все</li>
                    {
                        items.map((name, index) => 
                            <li
                                className={this.state.activeItem === index ? 'active' : ''}
                                onClick={() => this.onItemClick(index)} 
                                key={`${name}_${index}`}>{name}
                                
                            </li>
                        )
                    }
                  </ul>
                </div>
            </div>
        )
    }

} */

export default Categories