import { Component } from "react";
import css from './form.module.css'

class Form extends Component {

    state = { 
    name: '',
    number: '',
    };

    handleChange = e => {
        const  { name, value } = e.currentTarget
        this.setState({ [name]: value });
      };

      handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
      };

      reset = () => {
        this.setState({name: '', number: '',})
      }

    render(){
        return ( 
        <form className={css.form} onChange={this.handleSubmit}>
            <label htmlFor="">Name
            <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={this.handleChange}
    />
            </label>
    
            <label htmlFor="">
            Number
              <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      onChange={this.handleChange}
    />
          </label>
            <button type="submit">Add contact</button>
          </form>
          );

    }
};

export default Form;