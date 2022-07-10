import React from 'react'
import '../styles/scss/main.scss';
import DetailsTable from './DetailsTable';
import SectionTitle from './SectionTitle';


const Details = () => {
  return (
    <div className="details-wrapper">
      <SectionTitle>
        table
      </SectionTitle>
      <DetailsTable/>
    </div>
  )
}

export default Details