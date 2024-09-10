import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { apiGetAllContacts } from "../../redux/contacts/operations"
import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList"
import css from "./ContactsPage.module.css"
import toast, { Toaster } from "react-hot-toast"

const ContactsPage = () => {
const dispatch = useDispatch()

// useEffect(()=>{dispatch(apiGetAllContacts())
// },[dispatch])

useEffect(() => {
  dispatch(apiGetAllContacts())
    .unwrap()
    .then(() => {
      toast.success("Contacts loaded successfully🎉");
    });
}, [dispatch]);



return (
  <div>
    <h1 className={css.title}>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
    <Toaster/>
  </div>
      
)

}


export default ContactsPage