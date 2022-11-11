import React from 'react'

const ItemListContainer = ({children}) => {
  return (
    <div class="container">
        <div class="row">
            <div class="col">{children}</div>
        </div>

    </div>
  )
}

export default ItemListContainer