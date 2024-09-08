import { useSelector } from "react-redux"
import Navigation from "../Navigation/Navigation"
import css from "./AppBar.module.css"
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AuthNav/AuthNav"

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn)
  return (
    <div className={css.container}>
      <Navigation/>
       {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  )
}

export default AppBar