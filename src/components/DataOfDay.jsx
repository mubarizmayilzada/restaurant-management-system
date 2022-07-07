import React from 'react'
import '../styles/scss/main.scss';
import SectionTitle from './SectionTitle';

const DataOfDay = () => {
  return (
    <div className='today-score'>
    <SectionTitle>Score of Today</SectionTitle>
    <div className='card'>
        <div className='card__1'>
            <h2>
                Total Order: 
            </h2>
            <h3>
                11
            </h3>
        </div>
        <div className='card__1 card--2'>
            <h2>
                Profit of Completed: 
            </h2>
            <h3>
                10000 - AZN
            </h3>
        </div>
    </div>
    </div>
  )
}

export default DataOfDay;