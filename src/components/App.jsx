import { Component } from "react";
// import { nanoid } from 'nanoid'
import Container from "./GlobalContainer/Container";
import Form from "./Form/Form";
import SearchContact from './SearchContact/SearchContact';
import TodoList from "./TodoList/TodoList";
import contacts from './contacts.json';
import { nanoid } from 'nanoid';




class SignContactForm extends Component {
  state = {
    contacts,
    filter: '',
  };

  addContact = ({name, number}) => {
    
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId)
    }))
  };

  searchContact = e => {
    const { filter, value } = e.currentTarget
    this.setState({ [filter]: value });
};




  // formSubmitData = data => {
  //   // console.log(data);
  // };


  render() {
    const { contacts } = this.state;

    return (
      <Container>
        <h2>Phonebook</h2>
      <Form onSubmit={this.addContact}/>
      <h2>Contacts</h2>
      <SearchContact value={this.state.value} onSearch={this.searchContact}/>
      <TodoList todos={contacts} onDelete={this.deleteContact}/>
      </Container>
    );
  }
}

export const App = () => {
  return (
    <div>
      <SignContactForm/>
    </div>
  );
};

