import { Component } from "react";
import css from './searchContact.module.css'

const SearchContact = ({id}) => (
<div className={css.searchContainer}>
    <label claasName={css.search} htmlFor="">Find contacts by name<input className={css.input} type="text" /></label>
    
    
</div>
);


export default SearchContact