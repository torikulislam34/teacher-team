import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = (props) => {
    const element = <FontAwesomeIcon icon={faUserPlus} />
    const element2 = <FontAwesomeIcon icon={faDollarSign} />
    // console.log(props.addteacher);
    
    const cart = props.addteacher;
    // const totalReducer = (previouse, current) => previouse+current.salary;
    // const total = addteacher.reduce(totalReducer, 0);
    let total = 0;
    for (const teacher of cart){
        total = total + teacher.salary;
    }

    let teacherName = [];
    for (const teacher of cart) {
        teacherName.push(teacher.name);
        
    }

    return (
        <div className='cart-style'>
            <h2 className='text-md'>{element} Teachers add: {props.addteacher.length}</h2>
            <br />
            <h3>{element2} Total:{total}</h3>
            <br />
            <ul>
            <li>
               Name: { teacherName }
            </li>
            </ul>
        </div>
    );
};

export default Cart;