import React from 'react'
import {MdEdit,MdDelete} from 'react-icons/md';
const Item = ({expenses,handleEdit,handleDelete}) => {
const {id,charge,amount} = expenses
    return (
        <li>
            <div className="item">
                <div className="info">
                    <span className="expense">{charge}</span>
                    <span className="amount">${amount}</span>
                </div>
            <button className="edit-btn" aria-label="edit button" onClick={() => handleEdit(id)}>
                <MdEdit/>
            </button>
            <button className="clear-btn" aria-label="delete button" onClick={()=> handleDelete(id)}><MdDelete/>
            </button>
            </div>
        </li>
    )
}
export default Item;
