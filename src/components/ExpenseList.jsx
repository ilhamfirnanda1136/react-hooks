import React from 'react'
import Item from './ExpenseItem';
import {MdDelete} from 'react-icons/md';
const ExpenseList = ({expenses,handleEdit,handleDelete,clearItem}) => {
    return (
        <>
          <ul className="list">
              {expenses.map((expenses)=>{
                  return <Item key={expenses.id} expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit}/>
              })}
          </ul> 
          {expenses.length > 0 && 
          <button className="btn" onClick={clearItem}>
              Clear expenses <MdDelete className="btn-icon" /></button>}
        </>
    )
}
export default ExpenseList