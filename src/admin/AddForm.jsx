import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/scss/main.scss';
import DropDown from './DropDown';

const AddForm = () => {
    const [meals, setMeals] = useState([{ "id": 1, "title": "Dolma", "price": 6}]);
    const [workers, setWorkers] = useState([{ "id": 1, "name": "Mubariz"}]);
    const [tables, setTables] = useState([{ "id": 1, "name": "table-1"}]);

    const [selectedMeal,setSelectedMeal] = useState('');
    const [selectedWorker,setSelectedWorker] = useState('');
    const [selectedTable,setSelectedTable] = useState('');


    useEffect(()=>{
        axios.get("http://localhost:3500/meals")
        .then((res)=>{
            setMeals(res.data);
        })
    },[])

    useEffect(()=>{
        axios.get("http://localhost:3500/workers")
        .then((res)=>{
            setWorkers(res.data);
        })
    },[])

    useEffect(()=>{
        axios.get("http://localhost:3500/tables")
        .then((res)=>{
            setTables(res.data);
        })
    },[])

    const mealName = [];
    const workerName = [];
    const tableName = [];

    meals.map(meal => (
        mealName.push(meal.title)
    ));
    workers.map(worker => (
        workerName.push(worker.name)
    ));
    tables.map(table => (
        tableName.push(table.name)
    ));

    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
    <div className='addform-wrapper'>
        <form className='custom-form' action="">
            <input disabled className='custom-input' value={selectedMeal} type="text" placeholder='meal'/>
            <DropDown setSelectedWord={setSelectedMeal} options={mealName} title="meal"/>
            <input className='custom-input' value={selectedTable} type="text" placeholder='table'/>
            <DropDown options={tableName} setSelectedWord={setSelectedTable} title="table"/>
            <input className='custom-input' value={selectedWorker} type="text" placeholder='worker'/>
            <DropDown options={workerName} setSelectedWord={setSelectedWorker} title="worker"/>
            <input className='custom-input custom-input__number' type="number" min={1} placeholder='count'/>
            <button type='submit' className='custom-button' onClick={handleSubmit}>
                Create
            </button>
            <span className='custom-price'>
                Price: 5
            </span>
        </form>
    </div>
  )
}

export default AddForm