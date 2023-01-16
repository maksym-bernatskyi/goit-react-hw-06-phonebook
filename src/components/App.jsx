import { useState, useMemo } from 'react';
import styled from 'styled-components';
import Container from './Container';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import useLocalStorage from './LocalStorage/LocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filterName, setFilterName] =useState("");

  const visibleContacts = useMemo(() => {
    const normalizedFilter = filterName.toLowerCase();

    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
  }, [contacts, filterName]);

  const handleFormSubmit = (data) => {
    const checkName = contacts.find(element => element.name === data.name);

    checkName === undefined ? setContacts((prevState) => [data, ...prevState]) : alert(`${data.name} is already in contacts.`);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== contactId));
    };

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={handleFormSubmit} />
      <Filter value={filterName} onChange={(event) => setFilterName(event.currentTarget.value)} />
      <ContactList data={visibleContacts} onDelete={deleteContact} />
    </Container>
    );
  }

const Title = styled.h1`
  font-size: 24px;
`;