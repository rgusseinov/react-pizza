export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj
})

// Clear cart items
export const clearCart = () => ({
  type: 'CLEAR_CART'
})

// Remove cart item

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id
})