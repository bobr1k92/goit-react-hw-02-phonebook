import { Component } from "react";
// import { nanoid } from 'nanoid'
import Form from "./Form/Form";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SignContactForm/>
    </div>
  );
};

const INITIAL_STATE = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
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
      <Form onSubmit={this.formSubmitData}/>
    );
  }
}