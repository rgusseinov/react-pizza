import axios from 'axios'

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    console.log(sortBy, category)
    dispatch({
        type: 'SET_LOADED',
        payload: false
    })

    axios.get(`http://localhost:3001/pizzas?category=${category}$_sort=${sortBy}`).then(({ data }) => {
        dispatch(setPizzas(data))
    }) 
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})
