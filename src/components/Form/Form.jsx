import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Input from '../Input';
import { add, getContactState } from '../Redux/contactsSlice';
import { FormContainer, ButtonSubmit } from "./Form.styled";

const Form = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [id, setId] = useState("");

    const contacts = useSelector(getContactState);
    const dispatch = useDispatch();

    const reset = () => {
        setName("");
        setNumber("");
        setId("");
    };

    const handleSubmit = (event) => {
        if (number.length > 13) {
        return alert('Please enter correct phone number!');
    }

        const checkName = contacts.find((element) => element.name === name);
        checkName === undefined ? dispatch(add({ name, number, id })) : alert(`${name} is already in contacts!`);
        event.preventDefault();
        reset();
    };

    const handleInputChange = (event) => {
        setName(event.currentTarget.value);
        setId(nanoid());
    };

        return (
            <FormContainer onSubmit={handleSubmit}>
                <Input 
                    onChange={handleInputChange} 
                    title="Name" 
                    type="text" 
                    name="name" 
                    value={name} 
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    placeholder="Please enter the name"
                    />
                <PhoneInput 
                    defaultCountry="UA"
                    onChange={(number) => {setNumber(number)}}
                    region="Europe"
                    title="Number"
                    type="tel"
                    name="number"
                    value={number}
                    placeholder="Please enter phone number"
                    autoComplete="off"
                    international
                    className="inputPhone"
                    maxLength="16"
                    />
                <ButtonSubmit onSubmit={handleSubmit}>Add contact</ButtonSubmit>
            </FormContainer>
        );
    }

export default Form;