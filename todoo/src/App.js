import React, {useState, useReducer } from 'react';
import './App.css';
import todoReducer from './store/reducers/todoReducer'
import initialState from './store/index'
import TodoList from './components/TodoList';

function App() {
  // console.log(initialState)
  const [todo, setTodo] = useState('')
  const [store, dispatch] = useReducer(todoReducer, initialState)
  // const [isComplete, setIsComplete] = useState()
  
  
  const handleChange = e => { 
    // const { name, value, type, checked} = e.target
    // type === 'checkbox' ?
      setTodo(e.target.value)
  }

  const complete = (e) => {
    // console.log(e.target.id, 'objeeeeeect')
    return dispatch({ type: 'COMPLETE_TODO', id: e.target.id})
  }

  const clearComplete = e => {
    return dispatch({ type: 'CLEAR_TODO' })
  }
  
  return (
    <div className="App">
      <TodoList 
        handleChange={handleChange} 
        store={store} 
        dispatch={dispatch} 
        todo={todo}
        complete={complete}
        clearComplete={clearComplete}
      />
    </div>
  );
}

export default App;
