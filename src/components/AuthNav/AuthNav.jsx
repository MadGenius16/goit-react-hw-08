import { NavLink } from "react-router-dom"
import css from "../AuthNav/AuthNav.module.css"
import clsx from "clsx"

const AuthNav = () => {
  return (
    <ul className={css.list}>
      <li>
      <NavLink to="/register" className={({ isActive }) => {
return clsx(css.navLink, isActive && css.active)}}>Register</NavLink>
      </li>
      <li>
      <NavLink to="/login" className={({ isActive }) => {
return clsx(css.navLink, isActive && css.active)}}>Login</NavLink>
      </li>
    </ul>
  )
}

export default AuthNav