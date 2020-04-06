import React from 'react';


const TodoList = ({ handleChange, store, dispatch, todo, complete, clearComplete}) => {
    console.log(store, 'store here')

    const stateTodos = store.map(x =>  
        <div>
            <span style={x.completed ? { textDecoration: 'line-through', color: 'gray'} :  null }id={x.id}>{x.item}</span>
            <input id={x.id} type="checkbox" onChange={complete}/>
        </div>
    )
    // const stateTodos = store.map(x =>  <input id={x.id} value={x.item} type="checkbox" onChange={complete}>)

    return (
        <div>

            <h1>Todo App FTW</h1>
            <ul>
            {stateTodos}
            </ul>
            <input 
                name="todoInput"
                value={todo}
                onChange={handleChange}
                />
            <button onClick={() => dispatch({ type: 'ADD_TODO', payload: todo })} >ADD</button>
            <button onClick={clearComplete} >Clear</button>

                </div>
    
    )
}

export default TodoList;