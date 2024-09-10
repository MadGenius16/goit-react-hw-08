import { useDispatch, useSelector } from "react-redux";
import {  selectAuthUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";
import { RiUserFollowLine } from "react-icons/ri";
import css from "./UserMenu.module.css"
import { RxExit } from "react-icons/rx";
const UserMenu = () => {

  const dispatch = useDispatch()

  const user = useSelector(selectAuthUser)

  const onLogout = ()=>{
    dispatch(apiLogout());
  }
  return (
    <div className={css.logoutWrap}>
        <p className={css.userText}><RiUserFollowLine className={css.icon} /> {user.name}</p>
        <button className={css.btnLogout} onClick={onLogout} type="button">Logout<RxExit /></button>
    </div>
  )
}

export default UserMenu