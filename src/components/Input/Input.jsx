import { Label, InputInner, ContainerInput } from "./Input.styled";

const Input = ({ 
    title, 
    type, 
    name, 
    value, 
    placeholder, 
    pattern, 
    onChange,
}) => {
    return (
        <ContainerInput>
            <Label>{title}</Label>
            <InputInner 
            type={type} 
            name={name} 
            key={name} 
            value={value} 
            onChange={onChange} 
            pattern={pattern} 
            placeholder={placeholder} 
            autoComplete="off" 
            required
            />
        </ContainerInput>
    );
};

export default Input;