import css from "./App.module.css"
import { lazy, Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import Loader from "./Loader/Loader"
import { selectAuthIsRefreshing, selectAuthToken,  } from "../redux/auth/selectors"
import { apiRefreshUser } from "../redux/auth/operations"
import Layout from "./Layout/Layout"
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute"
import PrivateRoute from "./PrivateRoute/PrivateRoute"



const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage")) 
const HomePage = lazy(() => import("../pages/HomePage/HomePage")) 
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage")) 
const RegistrationPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage")) 



function App() {

const dispatch = useDispatch()
const isRefreshing = useSelector(selectAuthIsRefreshing)
const token = useSelector(selectAuthToken)

useEffect(()=>{
  if(!token) return;
   dispatch(apiRefreshUser()) 
  }, [dispatch, token]);


  return isRefreshing ? (
    <p>User is refreshing, please wait</p>
  ) : (
    <div className={css.container}>
          <Layout/>

        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} />} />
            <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} />} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>}/>} />
          </Routes>
        </Suspense>
  
    </div>
  )
}

export default App
