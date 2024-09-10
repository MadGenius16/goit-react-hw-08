import { useSelector } from 'react-redux'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import { selectAuthError } from '../../redux/auth/selectors'

const RegistrationPage = () => {

  const error = useSelector(selectAuthError)
  
  return (
    <div>
      <RegistrationForm/>
      {error && <p>Oops, {error}</p>}
    </div>
  )
}

export default RegistrationPage