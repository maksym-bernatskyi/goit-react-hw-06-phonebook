import { useDispatch, useSelector } from "react-redux";
import { ContainerSearch, Title, Input } from "./Filter.styled";
import { filter } from "../Redux/contactsSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.contacts.filter);
    const onChange = (event) => {
        dispatch(filter(event.currentTarget.value.toLowerCase()));
    };

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