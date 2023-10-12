import React, { useState, useEffect } from 'react';
import Navbar2 from './Navbar2.js';
import Taskbar from './Taskbar.js';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [points, setPoints] = useState(0);
  const [todoListData, setTodoListData] = useState([]);
  const [f1, f2] = useState(false);

  useEffect(() => {
    fetch('/gettodo')
      .then((response) => response.json())
      .then((data) => {
        setTodoListData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addTodo = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask('');
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    if (!newTodos[index].completed) {
      setPoints(points + 1);
    }
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleRemoveFetchedTodo = (index) => {
    // Remove the fetched todo at the given index
    const newTodoListData = [...todoListData];
    newTodoListData.splice(index, 1);
    setTodoListData(newTodoListData);
  };

  const handleCompleteFetchedTodo = (index) => {
    // Handle completion logic for the fetched todo at the given index
    const newTodoListData = [...todoListData];
    newTodoListData[index].iscompleted = !newTodoListData[index].iscompleted;
    setTodoListData(newTodoListData);
    setPoints(points+1);
  };

  return (
    <div className="mb-20">
      <Navbar2 head={"Accomplish It"} />
      <div className="w-96 h-96 mx-auto my-auto mt-14">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <div className="flex mb-4 text-center justify-around">
          <div className='w-[60%]'>
            <form action="/addtodo" method="POST" className='mb-4'>
              <label htmlFor="todoname">Task :</label>
              <input
                type="text"
                name="todoname"
                className="border rounded py-2 px-3 w-[100%]"
                placeholder="Add a task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                type='submit'
                className="bg-black text-white py-2 px-4 ml-2 rounded"
              >
                Add
              </button>
            </form>
          </div>
        </div>

        <ul className="list-disc pl-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`visible flex justify-between items-center bg-gray-100 py-2 px-4 mb-2 rounded ${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.text}
              <button className="mr-2 text-red-500" onClick={() => removeTodo(index)}>
                Remove
              </button>
              <button className="ml-2 text-green-500" onClick={() => completeTodo(index)}>
                Complete
              </button>
            </li>
          ))}
        </ul>

        <ul className="list-disc pl-4">
          {todoListData.map((todo, index) => (
            <li
              key={index}
              className={`visible flex justify-between items-center bg-gray-100 py-2 px-4 mb-2 rounded ${todo.iscompleted ? 'line-through text-gray-500' : ''}`}
            >
              {todo.todoname}
              <button
                className="ml-2 text-red-500"
                onClick={() => handleRemoveFetchedTodo(index)}
              >
                Remove
              </button>
              <button
                className="ml-2 text-green-500"
                onClick={() => handleCompleteFetchedTodo(index)}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-9 text-center ">
          <p className="font-bold">Points: {points}</p>
        </div>
      </div>
      <Taskbar />
    </div>
  );
};

export default Todo;
