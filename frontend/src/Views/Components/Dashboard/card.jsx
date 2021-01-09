import React from 'react'
import './card.css'
import PriorityController from '../../../Controllers/priorityController'

export default (props)=>{
    const {priority} = props;
    const {level,color} = PriorityController(priority);

    return(
        <div className='dashboard-card' onClick={props.clicked} style={{color: color}}>
            <h2>Total:{level}</h2>
            <p>{props.count}</p>

        </div> 

    )
}