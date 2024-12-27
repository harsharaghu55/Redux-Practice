import store from "./store/configureStore";
import { addTask,completeTask, removeTask, fetchTodos } from "./store/task";

const unsubscribe = store.subscribe(() => {
    console.log("updated",store.getState())
})

store.dispatch(addTask({task:"Task_1"}))
store.dispatch(addTask({task:"Task_2"}))
store.dispatch(removeTask({id:1}))
store.dispatch(completeTask({id:2}))
store.dispatch(fetchTodos())
