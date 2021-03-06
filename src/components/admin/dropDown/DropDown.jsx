import React from 'react'
import './dropDown.scss';
import { useState } from 'react'

const DropDown = ({options,title,setSelectedWord,setSelectedTable,setSelectedWorker,closeDropDown,closeDropDownWorker}) => {
const [showOptions,setShowOptions] = useState(false);

const handleClick = () => {
  setShowOptions(!showOptions);
};

const handleClick2 = (e) => {
  setShowOptions(!showOptions);  
  setSelectedWord(e.target.innerText);
  setSelectedTable(e.target.innerText);
  setSelectedWorker(e.target.innerText);
};

  return (
        <div className="dropdown-wrapper">
          <div class="relative inline-block text-left">
          <div>
            <button onClick={handleClick} type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-indigo-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
              {title}
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          {showOptions && (
            
            (closeDropDownWorker && (title === 'worker')) || (closeDropDown && (title === 'table')) ? '' : (
            <div class="custom-drop-wrapper origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            <div class="py-1" role="none">
                {options && options.map(options => (
                    <div key={options} onClick={handleClick2} class="custom-list-item hover:bg-indigo-50 text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">
                        {options}
                    </div>
                ))}
            </div>
          </div>
          )
          
          )
          
          
          }
  
        </div>
        </div>
    )
}

export default DropDown