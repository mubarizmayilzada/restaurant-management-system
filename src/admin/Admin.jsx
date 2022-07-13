import React from 'react'
import AddForm from './AddForm'
import OrderTable from './OrderTable'

const Admin = () => {


  const {render, createOrder, total,setStatusbar,setCreateOrder,statusbar,setCancel,data} = AddForm();
  return (
    <div className="admin">
      {render}
      <OrderTable data={data} setCancel={setCancel} setCreateOrder={setCreateOrder} setStatusbar={setStatusbar} total={total} createOrder={createOrder}/>
    </div>
  )
}

export default Admin