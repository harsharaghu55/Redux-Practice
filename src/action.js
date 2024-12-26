import * as actionTypes from './actionTypes'

export const addTask = (task) => ({type: actionTypes.ADD_TASK,payload:{task:task}})
export const removeTask = (id) => ({type: actionTypes.REMOVE_TASK,payload:{id:id}})
export const completeTask = (id) => ({type: actionTypes.COMPLETE_TASK,payload:{id:id} })