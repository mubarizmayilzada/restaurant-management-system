import React from 'react'
import AddForm from './AddForm'
import OrderTable from './OrderTable'

const Admin = () => {


  const {render, createOrder, total,setStatusbar,setCreateOrder,statusbar,setCancel} = AddForm();
  return (
    <div className="admin">
      {render}
      <OrderTable setCancel={setCancel} setCreateOrder={setCreateOrder} setStatusbar={setStatusbar} total={total} createOrder={createOrder}/>
    </div>
  )
}

export default Admin