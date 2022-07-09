import React from 'react'
import '../styles/scss/main.scss';

const DataOfDay = ({price}) => {
  return (
    <div className='total-score'>
    <div className='card'>
        <div className='card__3'>
            <h2>
                Total Budget: 
            </h2>
            <h3>
                {price} azn
            </h3>
        </div>
    </div>
    </div>
  )
}

export default DataOfDay;