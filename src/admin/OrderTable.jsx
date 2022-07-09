import { Link } from 'react-router-dom';
import '../styles/scss/main.scss';
import TotalBudget from '../components/TotalBudget';

const OrderTable = ({createOrder,total}) => {


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
                         1
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
                      {item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link to="/details" className="p-1 px-2 rounded-full bg-indigo-200 text-gray-700 dark:text-indigo-600  hover:text-indigo-900">
                        İmtina
                      </Link>
                    </td>
                  </tr>
                ))}




              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TotalBudget price={total}></TotalBudget>
    </div>
    </>
  )
}

export default OrderTable