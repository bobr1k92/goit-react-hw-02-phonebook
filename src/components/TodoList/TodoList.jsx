import { nanoid } from "nanoid";
import { Component } from "react";
import css from './todolist.module.css';
// import { IoMdTrash } from "react-icons/io";


const TodoList = ({todos, onDelete}) => (
 <ul className={css.todoList}>{
    todos.map(({id, name, number}) => (
        <li key={id} className={css.todoItem}>
        <p className={css.contactName} >{name}</p>
        <p className={css.contactNumber} >{number}</p>
        <button type="button" className={css.contactBtn} onClick={() => onDelete(id)}>Удалить</button>
        </li>))}
</ul>
); 

export default TodoList