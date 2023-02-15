import { Component } from "react";
// import { nanoid } from 'nanoid'
import Container from "./GlobalContainer/Container";
import Form from "./Form/Form";
import SearchContact from './SearchContact/SearchContact';
import TodoList from "./TodoList/TodoList";
import contacts from './contacts.json';




const INITIAL_STATE = {
  contacts,
};
class SignContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  formSubmitData = data => {
    console.log(data);
  }


  render() {
    const { contacts, name, number, } = this.state;

    return (
      <Container>
        <h2>Phonebook</h2>
      <Form onSubmit={this.formSubmitData}/>
      <h2>Contacts</h2>
      <SearchContact/>
      <TodoList todos={contacts}/>
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

