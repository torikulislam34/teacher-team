import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teachers from '../Teachers/Teachers';
import './main.css'
const Main = () => {
    const [teachers, setTeachers] = useState([]);
    const [addteacher, setAddteacher] = useState([]);


    useEffect(()=>{
        fetch('./Fakedata.json')
        .then(res => res.json())
        .then(data => setTeachers(data));
    },[])

    const handelAddtoCart = teacher => {
        // console.log(teacher.name);
        const newAdd = [...addteacher, teacher];
        setAddteacher(newAdd);
    }

    return (
        <div className='main-container'>
            
            <div className='allTeamStyle'>    
                
                {
                    teachers.map(teacher => <Teachers 
                    key= {teacher.key}
                    teacher={teacher}
                    handelAddtoCart={handelAddtoCart}
                    >

                    </Teachers>)
                }
               
            </div>
            <div>
                <Cart addteacher={addteacher}></Cart>
            </div>
        </div>
    );
};

export default Main;