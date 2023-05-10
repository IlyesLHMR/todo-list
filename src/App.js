import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container } from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filterTask, setFilterTask] = useState(null)
  // Create tasks:
    const createTask = function (value){
      setTasks([...tasks, value]);
    };

  // Update tasks:
    const updateTask = function (index) {
      const value = prompt('Please enter your new task');
      if (value) {
        const copy = [... tasks];
        copy[index] = value;

        setTasks(copy)
      }
    };

    // Delete Tasks:

    const deleteTask = function (index){
      const copy = [... tasks];

      copy.splice(index, 1);

      setTasks(copy);
    };

    // Search Tasks:

  const searchTasks = function(searchTerm){
      const filter = tasks.filter(function(value){
        const valueLower = value.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();

        return valueLower.includes(searchTermLower);
      })
    setFilterTask(filter);
  };

  const resetSearch = function (){
    setFilterTask(null);
  };
  
  const data = filterTask || tasks;
  console.log(data);

  return (
    <>
      <header className='bg-secondary py-2'>
        <Container fluid className='p-0'> 
          <h1 className='text-white text-center'>Todo App</h1>  
        </Container>
      </header>

      {/* Task Form */}
      <main className='container'>
        <TaskForm 
          createTask={createTask}
          searchTasks={searchTasks}
        />
      </main>

      {/* Display Task */}
      <section className='mt-5'>
        {/* ! = = */}
        {filterTask ?.length > 0 ?(
          <button onClick={resetSearch} className='btn btn-primary'>Reset</button>
        ) : null}
        {data.map(function(value, index){
          return(
            <div key={index} className='bg-secondary p-2'>
              <p className='text-white'> 
              # {index +1} - {value}
              </p>
              <div className='d-flex gap-2 mb-2'>
                <span onClick= {()=> updateTask(index)} className='text-bg-warning text-white p-2 btn '>Edit</span>
                <span  onClick= {()=> deleteTask(index)} className='text-bg-danger text-white p-2 btn'>Delete</span>
              </div>
            </div>
          );  
        })}    

         {data.length=== 0 && <h2 className='text-danger'>Any Task...</h2>}   
      </section>
    </>
    
  );
}

export default App;
