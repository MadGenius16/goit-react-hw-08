import { useDispatch, useSelector } from "react-redux"
import css from "./App.module.css"
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import SearchBox from "./SearchBox/SearchBox"
import { useEffect } from "react"
import { fetchContacts } from "../redux/contactsOps"
import { selectError, selectLoading } from "../redux/contactsSlice"


function App() {

const dispatch = useDispatch()
const loading = useSelector(selectLoading)
const error = useSelector(selectError)

useEffect(()=>{ dispatch(fetchContacts()) }, [dispatch])


  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ContactList/>
    </div>
  )
}

export default App
