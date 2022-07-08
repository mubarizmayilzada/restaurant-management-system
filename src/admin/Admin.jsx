import React from 'react'
import AddForm from './AddForm'
import OrderTable from './OrderTable'

const Admin = () => {
  return (
    <div className="admin">
      <AddForm/>
      <OrderTable/>
    </div>
  )
}

export default Admin