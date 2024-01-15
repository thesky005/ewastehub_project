import React ,{ useState, useEffect } from 'react'

const Popup = ({ onClose, itemDetails }) => {
    console.log(itemDetails)
  return (
    <div>
    <h2>{itemDetails.productName}</h2>
    {/* Display other item details here */}
    <button onClick={onClose} style={{position:'fixed'}}>Close</button>
  </div>
  )
}

export default Popup