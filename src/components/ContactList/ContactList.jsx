import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Redux/contactsSlice";
import { ContainerList, Title, Wrapper, Item, ButtonClose, TextList } from "./ContactList.styled";

const ContactList = () => {
    const items = useSelector((state) => state.contacts.items);
    const nameFilter = useSelector((state) => state.contacts.filter);
    const dispatch = useDispatch();

    const deleteContact = (contactId) => {
        dispatch(remove(contactId));
    };

    const FilterItems = () => {
        return items.filter((item) => item.name.toLowerCase().includes(nameFilter));
    };

    let contacts = nameFilter === "" ? items : FilterItems();

    return (
        <ContainerList>
            <Title>Contacts</Title>
            {contacts.length > 0 ? (
                <Wrapper>
                    {contacts.map(({ id, name, number }, index) => (
                        <Item key={id} index={index}>
                            {name} : {number}
                            <ButtonClose onClick={() => deleteContact(id)}></ButtonClose>
                        </Item>
                    ))}
                </Wrapper>
            ) : (
                <TextList>No contacts</TextList>
            )}
        </ContainerList>
    );
};

export default ContactList;