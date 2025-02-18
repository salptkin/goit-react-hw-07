import ContactsForm from "./components/ContactsForm/ContactsForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(fetchContacts());
    },
    [dispatch]
  );

  return (
    <>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
