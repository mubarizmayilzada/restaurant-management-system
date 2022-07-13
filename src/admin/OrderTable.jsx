import { useNavigate } from 'react-router-dom';
import '../styles/scss/main.scss';
import TotalBudget from '../components/TotalBudget';
import axios from 'axios';
import { useEffect, useState } from 'react';



const OrderTable = ({createOrder,total,setStatusbar,setCreateOrder,setCancel}) => {

  const [statusWord,setStatusWord] = useState(true);
  const [setStatus,setSetStatus] = useState(true);
  const [table,setTable] = useState('');
  const [worker,setWorker] = useState('');
  const [product,setProduct] = useState('');
  const [count,setCount] = useState(1);
  const [price,setPrice] = useState(0);
  const navigate = useNavigate();

const detectedPrice = (key) => {
  switch (key) {
    case 'Dolma':
        return 6;
    case 'Yumurta':
        return 2;
      case 'Kabab':
        return 10;
      case 'Sac':
        return 6;
      case 'Baliq':
        return 8;
      case 'Merci':
        return 3;
      case 'Pizza':
        return 10;
      case 'Nar qovurmasi':
        return 15;
    default:
      break;
  }
}
  const handleCancel = (id) =>{
    // setStatusWord(!statusWord);

    createOrder.map((item)=>{
      (id === item.id) && (item.isCancel = true);
  })
  setCreateOrder([...createOrder]);

  }



  const handleReady = (id) =>{
    createOrder.map((item)=>{
      (id === item.id) && (item.statusbar = 'done');
  })
  setCreateOrder([...createOrder]);
  }





    const dateNow = new Date();



  
  

  
  
    const handleOrderSubmit = (e) =>{
      
    createOrder.map((item)=>(
      setTable(item.table),
      setWorker(item.worker),
      setProduct(item.product),
      setCount(item.count),
      setPrice(detectedPrice(item.meal) * item.count )
      ))
      
      const data = {
        "order":[
          {
            "table": table,
            "worker": worker,
            "product": [product],
            "count": count,
            "price": price,
            "date": table,
            "status": setStatus
          }
        ]
      }
      e.preventDefault();
      axios.post("http://localhost:3500/orders",data)
      // .then(navigate('/'))  
    }
    








    return (
      <>
    <div className="table-wrapper flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-indigo-200 dark:bg-indigo-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-600  uppercase tracking-wider dark:text-indigo-100"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider dark:text-indigo-100"
                  >
                    Table
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider dark:text-indigo-100"
                  >
                    Worker
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider dark:text-indigo-100"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider dark:text-indigo-100"
                  >
                    Count
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider dark:text-indigo-100"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider dark:text-indigo-100"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider dark:text-indigo-100"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider dark:text-indigo-100"
                  >
                    setStatus
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">#</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-indigo-100 dark:divide-gray-300">
                
                
                
                
                
                {createOrder.map((item,index) => (
                  
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                        {index + 1}
                        </div>
                      </div>
                    </td>


                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.table ? item.table : 'unkown'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.worker ? item.worker : 'unkown'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.meal}
                    </td>


                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5
                      font-semibold text-gray-700"
                      >
                        {item.count}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {
                       detectedPrice(item.meal) * item.count 
                      } AZN
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dateNow.toUTCString().split(' ')[4]} AM
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`p-1 px-2 ${item.isCancel ? `text-red-700` : `text-indigo-800`}`}>
                        {item.isCancel ? 'cancelled' : item.statusbar}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span onClick={ item.isCancel ? ' ' : ()=>{handleReady(item.id)}  } className={`p-1 px-2 cursor-pointer ${item.isCancel ? `bg-red-200` : `bg-indigo-200`} text-indigo-900 rounded-full`}>
                        {item.isCancel ? 'cancelled' : 'setReady'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <span onClick={item.statusbar !== 'done' ? ()=>{handleCancel(item.id)} : ' ' } className="cursor-pointer p-1 px-2 rounded-full bg-blue-300 text-gray-700 dark:text-indigo-600  hover:text-indigo-900">
                      {(item.statusbar === 'done' ? 'non-cancel' : (item.isCancel ? 'cancelled' : 'cancel'))}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TotalBudget price={total}></TotalBudget>
      <button type='submit' onClick={handleOrderSubmit} className='custom-button'>
          Order Submit 
      </button>
    </div>
    </>
  )
}

export default OrderTable