import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = (id, name) => {
    this.setState({
      contacts: [...this.state.contacts.filter(contact => contact.id !== id)],
    });
    Notify.failure(`${name} deleted from your phonebook`, { timeout: 2000 });
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  addContact = data => {
    return this.state.contacts.map(contact => contact.name).includes(data.name)
      ? Notify.warning(`${data.name} is already in contacts`, { timeout: 2000 })
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} contacts={contacts} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} handleChange={this.handleFilterChange} />
        </Section>
        <ContactList
          visibleContacts={filter ? this.getVisibleContacts() : contacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
