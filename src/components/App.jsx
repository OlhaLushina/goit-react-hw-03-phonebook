import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import initialContacts from '../contacts.json';

const KEY_CONTACTS = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(KEY_CONTACTS));
    if (savedContacts !== null) {
      /* Якщо в localStorage щось є, то пишемо це в контакти*/
      this.setState({ contacts: savedContacts });
    } else {
      /* Якщо в localStorage нічого немає, то записуємо у контакти початкові дані ініціалізації*/
      this.setState({ contacts: initialContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(KEY_CONTACTS, JSON.stringify(this.state.contacts));
    }
  }

  /* Додавання нового контакту */
  addContact = newContact => {
    if (
      this.state.contacts.filter(
        item =>
          item.name.toLocaleLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      ).length > 0
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  /* Видалення контакту */
  delContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== idContact),
    }));
  };

  /* Фільтр */
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    /* Фільтрація контактів */
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Section>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.delContact} />
      </Section>
    );
  }
}
