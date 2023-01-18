import styled from "styled-components";
import Container from "../Container/Container";

export const ContainerSearch = styled(Container)`
    width: 300px;
    margin: 20px 0;
    padding: 10px 0;
    border-radius: 10px;
    color: #fffff;
    background: linear-gradient(
        90deg,
        rgba(41, 30, 94, 1) 0%,
        rgba(29, 59, 201, 1) 50%,
        rgba(5, 196, 207, 1) 100%
    );
`;

export const Title = styled.h2`
    font-size: 20px;
`;

export const Input = styled.input`
    margin-top: 10px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    opacity: 0.5;
`;