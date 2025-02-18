import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactContainer}>
      <div>
        <h2 className={styles.contactName}>Name: {contact.name}</h2>
        <p className={styles.contactNumber}>Number: {contact.number}</p>
      </div>

        <button
        className={styles.deletebutton}
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}