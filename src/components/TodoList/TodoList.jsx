import { Component } from "react";
import css from './todolist.module.css';

const TodoList = ({todos}) => (
 <ul className={css.todoList}>{
    todos.map(({id, name, number}) => (
        <li className={css.todoItem} key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button">Удалить</button>
        </li>))}
</ul>
); 

export default TodoList