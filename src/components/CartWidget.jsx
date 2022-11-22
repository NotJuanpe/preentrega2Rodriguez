import React from 'react'

const CartWidget = () => {
  return (
    
    <a class="navbar-brand fw-bold" href="#page-top" onClick={click => (alert('Cart'))}><i class="bi bi-cart-fill"/></a>

  )
}

export default CartWidget