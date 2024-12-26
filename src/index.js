import store from "./store";
import { addTask,completeTask } from "./action";

store.dispatch(addTask("Task_1"))
store.dispatch(addTask("Task_2"))
console.log(store.getState())
store.dispatch(completeTask(1))
console.log(store.getState())