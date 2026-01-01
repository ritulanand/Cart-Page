const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    }
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    const { id, type } = action.payload
    const newCart = state.cart
      .map((item) => {
        if (item.id === id) {
          if (type === 'inc') {
            return { ...item, amount: item.amount + 1 }
          }
          if (type === 'dec') {
            return { ...item, amount: item.amount - 1 }
          }
        }
        return item
      })
      .filter((item) => item.amount > 0)

    return { ...state, cart: newCart }
  }

  if (action.type === 'GET_TOTALS') {
    const { total, amount } = state.cart.reduce(
      (acc, item) => {
        acc.total += item.price * item.amount
        acc.amount += item.amount
        return acc
      },
      { total: 0, amount: 0 }
    )

    return {
      ...state,
      total: total.toFixed(2),
      amount,
    }
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true }
  }

  if (action.type === 'DISPLAY_ITEMS') {
  return {
    ...state,
    cart: action.payload,
    loading: false,
  }
}


  if (action.type === 'RESET_CART') {
  return {
    ...state,
    cart: action.payload,
  }
}

  return state
}

export default reducer
