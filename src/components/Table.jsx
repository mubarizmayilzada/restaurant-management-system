import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/scss/main.scss';
import Services from '../components/Services';
import DataOfDay from './DataOfDay';
import TotalBudget from './TotalBudget';
import HeroSection from '../components/HeroSection';
import axios from 'axios';



const Table = () => {
  const [tableData, setTableData] = useState([]);

  let totalOrderCount;
  totalOrderCount = tableData.length;

  useEffect(()=>{
    axios.get("http://localhost:3500/orders")
    .then((res)=>{
        setTableData(res.data);
    })

  },[])


  let profitAll = 0;
  tableData.map((item) => (
    profitAll = profitAll + item.order.price
  ))


  let profitDone = 0;
  tableData.map((item) => ( 
    (item.order.status === "done") && (profitDone = profitDone + item.order.price)
  )) 

    return (
      <>
        <div className="font-inter bg:white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto w-11/12">
            <HeroSection />
            <Services />
          </div>
        </div>

        <div className="table-wrapper flex flex-col">
          <DataOfDay
            totalOrderCount={totalOrderCount}
            profitDone={profitDone}
          />
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
                        Status
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
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Details</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-indigo-100 dark:divide-gray-300">
                    {tableData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div>{index + 1}</div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.order.table}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-2 inline-flex text-xs leading-5
                      font-semibold text-gray-700"
                          >
                            {item.order.worker}
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.order.status}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.order.price} AZN
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link
                            to={`/details/${item.id}`}
                            className="p-1 px-2 rounded-full bg-indigo-200 text-gray-700 dark:text-indigo-600  hover:text-indigo-900"
                          >
                            Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <TotalBudget profitAll={profitAll}></TotalBudget>
        </div>
      </>
    );
}

export default Table