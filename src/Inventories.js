import React from 'react'
import Inventory from './Inventory'

function Inventories({ inventories }) {
  return (
    <div>
        { inventories.length ? <h3>Here are your Inventories</h3> 
                             : <h3>You have no inventories, click create to get started</h3> 
        }
        {inventories.map((inventory, index) => {
               return <Inventory key={index} inventory={inventory} />     
        })}
    </div>
  )
}

export default Inventories