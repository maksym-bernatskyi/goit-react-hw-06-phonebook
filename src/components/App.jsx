import styled from 'styled-components';
import Container from './Container';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Filter />
      <ContactList />
    </Container>
    );
  }

const Title = styled.h1`
  font-size: 24px;
`;