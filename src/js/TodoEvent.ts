import { todoItem } from '../types/todolist'
import TodoDom from './TodoDom'
class TodoEvent extends TodoDom{
    constructor(private todoData:todoItem[], todoWrapper:HTMLElement) {
        super(todoWrapper)
        this.initList(this.todoData)
    }

    public addTodo(todo: todoItem): undefined | number {
        const _todo:undefined|todoItem = this.todoData.find((item:todoItem) => item.content === todo.content)
        if(!_todo) {
            this.todoData.push(todo);
            this.addItem(todo)
            return 
        }
        return 1001
        
    }
    public removeTodo(target:HTMLElement, id: number):void {
        this.todoData = this.todoData.filter((item: todoItem) => item.id !== id);
        this.removeItem(target)
    }
    public toggleComplte(target:HTMLElement, id: number): void {
        this.todoData.map((item: todoItem) => {
            if(item.id === id) {
                item.completed = !item.completed;
                this.changeCompleted(target, item.completed)
            }
        })
    
    }
}

export default TodoEvent;