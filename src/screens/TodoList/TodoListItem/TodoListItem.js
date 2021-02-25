import React,{useEffect, useState} from 'react';
import moment from 'moment';

const TodoListItem = (props) => {
   const { task, done, date, type } = props;

   const [status, setStatus] = useState(done);
   
   const handleChange = (e) =>{
        setStatus(!status);
    }

    useEffect(() => {
        setStatus(done)
    }, [done]) 

    return (
        <div className='todoListItem'>
            <input className="todoListItem__checkbox" type="checkbox" id="scales" name="scales"  checked={status} onChange={handleChange}/> 
            <p className="todoListItem__task">{task}</p>
            <p className={`todoListItem__type todoListItem__type-${type || "noType"}`}>{type || "no type"}</p>
            <p className='todoListItem__date'>{moment(date).format('MMMM Do ')}</p>
        </div>);
};

export default TodoListItem