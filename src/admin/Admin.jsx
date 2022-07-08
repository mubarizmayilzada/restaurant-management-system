import React from 'react'
import DropDown from './DropDown'

const Admin = () => {
  const options = ['new',"edit","delete","show"]
  return (
    <div>
      <div className="dropdowns-wrapper">
      <DropDown options={options}></DropDown>
      <DropDown options={options}></DropDown>
      </div>
    </div>
  )
}

export default Admin