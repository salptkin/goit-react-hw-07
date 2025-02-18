import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.ContactList}>
      {filteredContacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}