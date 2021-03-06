import React, { useEffect, useState } from 'react'
import Table from './components/table/Table';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Details from './components/details/Details';
import Admin from './components/admin/admin/Admin';

const App = () => {

  const [theme, setTheme] = useState(null);


  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  useEffect(()=>{
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  },[]);

  useEffect(()=>{
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  return (
      <>
        <button type='button' onClick={handleThemeSwitch} className='fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md'>
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
            <div className="font-inter bg:white dark:bg-slate-900">
            <div className='max-w-5xl mx-auto w-11/12'>

            </div>
              <BrowserRouter>
                <Routes>
                  <Route path='/' exact element={<Table/>}/>
                  <Route path='/details/:id' exact element={<Details/>}/>
                  <Route path='/admin' exact element={<Admin/>}/>
                </Routes>
              </BrowserRouter>
            </div>
      </>
    )
}

export default App
