import React from 'react'
import ItemCard from './ItemCard'

function Inventory({ inventory }) {
  return (
    <div>
        <ItemCard item={inventory}/>
    </div>
  )
}

export default Inventory