import clsx from "clsx";
import css from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
// import { RiUserFollowLine } from "react-icons/ri";
// import { RxExit } from "react-icons/rx";
// import { apiLogout } from "../../redux/auth/operations";

const Navigation = () => {
// const dispatch = useDispatch
  const IsLoggedIn = useSelector(selectAuthIsLoggedIn);
  // const user = useSelector(selectAuthUser)
  // const onLogout = ()=>{
  //   dispatch(apiLogout)
  // }

  return (
      <ul className={css.list}>
        <li>
        <NavLink to="/" className={({ isActive }) => { return clsx(css.navLink, isActive && css.active)}}>Home</NavLink>
        </li>
        {IsLoggedIn && <li>
        <NavLink to="/contacts" className={({ isActive }) => { return clsx(css.navLink, isActive && css.active)}}>Contacts</NavLink>
        </li>}
      </ul>
  //     <nav className={css.nav}>
  //         <ul className={css.list}>
  //           <li>
  //             <NavLink to="/" className={({ isActive }) => {
  // return clsx(css.navLink, isActive && css.active)}}>Home</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/register" className={({ isActive }) => {
  // return clsx(css.navLink, isActive && css.active)}}>Register</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/login" className={({ isActive }) => {
  // return clsx(css.navLink, isActive && css.active)}}>Login</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/contacts" className={({ isActive }) => {
  // return clsx(css.navLink, isActive && css.active)}}>Contacts</NavLink>
  //           </li>
  //         </ul>
  //         {IsLoggedIn && 
  //         <div className={css.logoutWrap}>
  //           <p className={css.userText}><RiUserFollowLine /> {user.name}</p>
  //           <button className={css.btnLogout} onClick={onLogout} type="button"><RxExit /></button>
  //         </div>
          
  //         }
  //     </nav>
  )
}

export default Navigation