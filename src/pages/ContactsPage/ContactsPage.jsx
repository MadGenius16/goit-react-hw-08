import { useDispatch, useSelector } from "react-redux"
import { selectUserContacts, selectUserContactsError, selectUserContactsIsLoading } from "../../redux/contacts/selectors"
import Loader from "../../components/Loader/Loader"
import { useEffect } from "react"
import { apiGetAllContacts } from "../../redux/contacts/operations"
import toast from "react-hot-toast"


const ContactsPage = () => {

const contacts = useSelector(selectUserContacts)
const isLoading = useSelector(selectUserContactsIsLoading)
const error = useSelector(selectUserContactsError)
const dispatch = useDispatch()

useEffect(()=>{dispatch(apiGetAllContacts()).unwrap().then(()=>{
  toast.success("contacts loaded successfully")
})

},[dispatch])




  return (
    <div>
    
      {isLoading && <Loader/>}
      {error !== null && (
        <p style={{color: "red"}}>{error}. Please, try again later.</p>
      )}
      <ul>
      {contacts?.length === 0 && <li>Contacts list is empty</li>}
        {Array.isArray(contacts) && contacts.map((contact)=>(<li key={contact.id}>
          <p><b>{contact.name}</b>: {contact.number}</p>
          <button  type="button">❌</button>
        </li>))}
      </ul>
    </div>
  )
}

export default ContactsPage