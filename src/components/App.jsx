import css from "./App.module.css"
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import SearchBox from "./SearchBox/SearchBox"
import { lazy, Suspense, useEffect } from "react"
import { fetchContacts } from "../redux/contactsOps"
import { selectError, selectLoading } from "../redux/contactsSlice"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"



const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage")) 
const HomePage = lazy(() => import("../pages/HomePage/HomePage")) 
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage")) 
const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage")) 
const Navigation = lazy(() => import("../components/Navigation/Navigation")) 
const Loader = lazy(() => import("../components/Loader/Loader.jsx"))

function App() {

const dispatch = useDispatch()
const loading = useSelector(selectLoading)
const error = useSelector(selectError)

useEffect(()=>{ dispatch(fetchContacts()) }, [dispatch])


  return (
    <div className={css.container}>
      <header>
       
        <nav>
          <Navigation/>
        </nav>
      </header>
      <main>
       <h1>Phonebook</h1>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <p>footer</p>
      </footer>
      
      <ContactForm/>
      <SearchBox/>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <ContactList/>
    </div>
  )
}

export default App
