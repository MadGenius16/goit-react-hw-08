import clsx from "clsx";
import css from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn, selectAuthUser } from "../../redux/auth/selectors";
import { RiUserFollowLine } from "react-icons/ri";

const Navigation = () => {

  const IsLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser)
  return (
      <nav className={css.nav}>
          <ul className={css.list}>
            <li>
              <NavLink to="/" className={({ isActive }) => {
  return clsx(css.navLink, isActive && css.active)}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => {
  return clsx(css.navLink, isActive && css.active)}}>Register</NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => {
  return clsx(css.navLink, isActive && css.active)}}>Login</NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className={({ isActive }) => {
  return clsx(css.navLink, isActive && css.active)}}>Contacts</NavLink>
            </li>
          </ul>
          {IsLoggedIn && <p className={css.userText}><RiUserFollowLine /> {user.name}</p>}
      </nav>
  )
}

export default Navigation