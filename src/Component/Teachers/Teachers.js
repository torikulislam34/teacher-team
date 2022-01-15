
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './teachers.css'


const Teachers = (props) => {
  const element = <FontAwesomeIcon icon={faUserPlus} />
    // console.log(props.teacher);
    const {name, img, salary, religion, age, country} = props.teacher;

    return (
        <div className='team-dtail'>
          <img src={img} alt="" />          
          <h2 className='nameStyle'>{name}</h2>
          <div className='deatils'>
          <p>Age : {age}</p>         
          <p><small>Relagion : {religion}</small></p>
          <p><small>Country : {country}</small></p>
          <p><small>Salary : {salary}</small></p>
          </div>
          <button 
          onClick ={()=>props.handelAddtoCart(props.teacher)}
          className='regular-btn'>
         { element} Add to Cart
          </button>
        </div>
    );
};

export default Teachers;