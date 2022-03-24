import { todoItem } from '../types/todolist'
import 'bootstrap/dist/css/bootstrap.min.css';
class TodoTemplete {
    protected todoView({id, content, completed}: todoItem): string{
        return `
        <div class='card my-2'>
            <div class='card-body'>
                <input class='me-3 form-check-input' type="checkbox" ${completed ? 'check' : ''} data-id="${id}"/>
                <span class='d-inline-block w-25' style="text-decoration: ${ completed ? 'line-through' : 'none' }">${content}</span>
                <button data-id="${id}" class="btn  btn-danger btn-sm">删除</button>
            </div>
        </div>
        `
    }
}

export default TodoTemplete;