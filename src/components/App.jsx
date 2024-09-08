import css from "./App.module.css"
import { lazy, Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import Loader from "./Loader/Loader"
import { selectAuthIsRefreshing,  } from "../redux/auth/selectors"
import { apiRefreshUser } from "../redux/auth/operations"
import Layout from "./Layout/Layout"



const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage")) 
const HomePage = lazy(() => import("../pages/HomePage/HomePage")) 
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage")) 
const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage")) 



function App() {

const dispatch = useDispatch()
const isRefreshing = useSelector(selectAuthIsRefreshing)
useEffect(()=>{ dispatch(apiRefreshUser()) }, [dispatch])


  return isRefreshing ? (
    <p>User is refreshing, please wait</p>
  ) : (
    <div className={css.container}>
          <Layout/>

        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
  
    </div>
  )
}

export default App
