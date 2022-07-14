import React from 'react'
import './totalBudget.scss';

const DataOfDay = ({profitAll}) => {
  return (
    <div className='total-score'>
    <div className='card'>
        <div className='card__3'>
            <h2>
                Total Budget: 
            </h2>
            <h3>
                {profitAll} azn
            </h3>
        </div>
    </div>
    </div>
  )
}

export default DataOfDay;