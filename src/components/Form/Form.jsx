import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Input from '../Input';

export default function Form({ onSubmit }) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [id, setId] = useState("");

    const reset = () => {
        setName("");
        setNumber("");
        setId("");
    };

    const handleSubmit = (event) => {
        if (number.length > 13)
        return alert('Please enter correct phone number');
        event.preventDefault();
        onSubmit({ name, number, id });
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

    Form.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 20px 0;
    border-radius: 10px;
    color: #fff;
    background-color: #000;
`;

const ButtonSubmit = styled.button.attrs(() => ({ type: 'submit' }))`
    position: relative;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 30px;
        border-radius: 5px;
        transition: all 1s ease;
    }
    &:hover:before {
        width: 100%;
    }
`;