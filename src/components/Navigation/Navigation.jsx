import clsx from "clsx";
import css from "./Navigation.module.css"
import { NavLink } from "react-router-dom";

const Navigation = () => {
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
      </nav>
  )
}

export default Navigation