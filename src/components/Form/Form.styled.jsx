import styled from "styled-components";

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