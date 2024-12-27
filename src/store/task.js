import { createAction,createReducer } from "@reduxjs/toolkit"


// action
export const addTask = createAction("ADD_TASK")
export const removeTask = createAction("REMOVE_TASK")
export const completeTask = createAction("COMPLETE_TASK")
export const fetchTodos = () => async (dispatch,getState) => {
   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
   const task = await response.json()
   dispatch(addTask({task:task.title}))
}

// reducer
let id = 0;
export default createReducer([],{
    [addTask.type]: (state, action) => {
        state.push(
            {
                id: ++id,
                task: action.payload.task,
                completed:false,
            }
        )
    },
    [removeTask.type]: (state, action) => {
       const index =  state.findIndex(task => task.id === action.payload.id)
       state.splice(index,1);
    },
    [completeTask.type]: (state, action) => {
        const index =  state.findIndex(task => task.id === action.payload.id)
        state[index].completed = true;
    }

})

