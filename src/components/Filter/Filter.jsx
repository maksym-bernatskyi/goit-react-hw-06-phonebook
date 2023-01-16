import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../Container';

const Filter = ({ value, onChange }) => {
    return (
        <ContainerSearch>
            <Title>Find contacts by name</Title>
            <Input 
            type="text" 
            value={value} 
            onChange={onChange} 
            placeholder="Search contact"
            />
        </ContainerSearch>
    );
};

export default Filter;

const ContainerSearch = styled(Container)`
    width: 300px;
    padding: 10px 0;
    margin: 20px 0;
    border-radius: 15px;
    color: #fff;
    background: #000;
`;

const Title = styled.h2`
    font-size: 20px;
`;

const Input = styled.input`
    margin-top: 10px;
    padding: 5px;
    border: none;
    border-radius: 10px;
`;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};