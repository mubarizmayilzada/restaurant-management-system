import React from 'react'
import AddForm from './AddForm'
import OrderTable from './OrderTable'

const Admin = () => {


  const {render, createOrder, total,setCreateOrder,data,detectedPrice} = AddForm();
  return (
    <div className="admin">
      {render}
      <OrderTable
        detectedPrice={detectedPrice}
        data={data}
        setCreateOrder={setCreateOrder}
        total={total}
        createOrder={createOrder}
      />
    </div>
  );
}

export default Admin