import clsx from "clsx";
import css from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";


const Navigation = () => {

  const IsLoggedIn = useSelector(selectAuthIsLoggedIn);


  return (
      <ul className={css.list}>
        <li>
        <NavLink to="/" className={({ isActive }) => { return clsx(css.navLink, isActive && css.active)}}>Home</NavLink>
        </li>
        {IsLoggedIn && <li>
        <NavLink to="/contacts" className={({ isActive }) => { return clsx(css.navLink, isActive && css.active)}}>Contacts</NavLink>
        </li>}
      </ul>

  )
}

export default Navigation