import React from 'react'
import AddForm from './AddForm'
import OrderTable from './OrderTable'

const Admin = () => {


  const {render, createOrder, total} = AddForm();
  return (
    <div className="admin">
      {render}
      <OrderTable total={total} createOrder={createOrder}/>
    </div>
  )
}

export default Admin