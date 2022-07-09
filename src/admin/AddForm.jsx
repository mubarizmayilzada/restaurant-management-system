import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
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

    const [createOrder, setCreateOrder] = useState([]);
    const [countValue, setCountValue] = useState(1);
    const [priceHolder,setPriceHolder] = useState([0]);
    // const [multiple,setMultiple] = useState(0);
    const [total,setTotal] = useState(0);
    const mealCount = useRef(1);

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
    let setMultiple = 0;
    let totalPrice = 0;
    useEffect(() =>{
        priceHolder.map((item)=>(
            setMultiple = item * countValue,
            totalPrice = total + setMultiple,
            setTotal(totalPrice)
        ))

    },[priceHolder])

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
    const createdOrderData = {
        meal: selectedMeal,
        table: selectedTable,
        worker: selectedWorker,
        count: countValue
        // price: total
    };
    const handleMealCount = () => {
        setCountValue(mealCount.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        meals.map(meal => (
            meal.title === selectedMeal ?
            setPriceHolder([...priceHolder, meal.price]) : ''       
        ));
        setCreateOrder([...createOrder,createdOrderData]);
    };

    
  return {
    total,
    createOrder,

    render:(
    <div className='addform-wrapper'>
        <form className='custom-form' action="">
            <input disabled className='custom-input' value={selectedMeal} type="text" placeholder='meal'/>
            <DropDown setSelectedWord={setSelectedMeal} options={mealName} title="meal"/>
            <input disabled className='custom-input' value={selectedTable } type="text" placeholder='table'/>
            <DropDown options={tableName} setSelectedWord={setSelectedTable} title="table"/>
            <input disabled className='custom-input' value={selectedWorker} type="text" placeholder='worker'/>
            <DropDown options={workerName} setSelectedWord={setSelectedWorker} title="worker"/>
            <input ref={mealCount} onChange={handleMealCount} className='custom-input custom-input__number' type="number" min={1} placeholder='count'/>
            <button type='submit' className='custom-button' onClick={!selectedMeal || !selectedWorker || !selectedTable ? (e) =>{e.preventDefault()} : handleSubmit }>
                Create
            </button>
            <span className='custom-price'>
                Price: {
                        meals.map(meal => (
                            meal.title === selectedMeal ?
                            meal.price : ''       
                        ))
                }
            </span>
        </form>
    </div>
  )}
}

export default AddForm