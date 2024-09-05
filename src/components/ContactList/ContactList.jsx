import { useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { selectFilteredContacts } from "../../redux/contactsSlice";


const ContactList = () => {

  const filteredContact = useSelector(selectFilteredContacts)
  // const filteredContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className={css.contactList}>
      {filteredContact.map((contact) => (
        <Contact
          id={contact.id}
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
}

export default ContactList