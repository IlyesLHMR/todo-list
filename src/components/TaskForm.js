import React, { useState } from 'react'

export default function TaskForm(props) {
    
    const [textEntered, setTextEntered] = useState('')
    
    const onChangeHandler = function (event) {
        setTextEntered(event.target.value);
};

const submitHandler = function(event){
    event.preventDefault();
    props.createTask(textEntered);
    setTextEntered('');
};

    // console.log(textEntered)

  return (
    <>
        <form 
            onSubmit={submitHandler} 
            className='mt-4 form-floating' >
            <input 
                type="text"
                name="task"
                className='form-control'
                onChange={onChangeHandler}
            />
            <label htmlFor="task">Enter a task</label>
            {/* {<input type="submit" value="Save"/>} */}
        </form>

        <div className='d-grip gap-2 d-md-block mt-2'>
            <button 
                onClick={()=>props.createTask(textEntered)} 
                type='button' 
                className='btn py-2 btn-primary me-3'>Add
            </button>
            
            <button 
                onClick={()=> props.searchTasks(textEntered)}
                type='button' 
                className='btn py-2 btn-secondary'>
                Get Task
            </button>
        </div>
    </>
  );
}
