import { FaUser } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import css from './Contact.module.css'
import { useDispatch } from "react-redux";

import { apiDeleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";


const Contact = ({ id, name, number}) => {
const dispatch = useDispatch()

const onDeleteContact = () => {
  dispatch(apiDeleteContact(id))
    .unwrap()
    .then(() => {
      toast.success("Contact deleted successfully.");
    });
};


  return (
    <div className={css.container}>
      <div className={css.contactWrap}>
        <p className={css.field}><FaUser />{name}</p>
        <p className={css.field}><IoCall />{number}</p>
      </div>
      <button onClick={onDeleteContact} className={css.deleteBtn} type="button">❌Delete</button>
      <Toaster/>
    </div>
  )
}

export default Contact