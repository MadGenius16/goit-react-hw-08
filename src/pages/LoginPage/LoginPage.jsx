import { useSelector } from 'react-redux'
import LoginForm from '../../components/LoginForm/LoginForm'
import { selectAuthError } from '../../redux/auth/selectors'

const LoginPage = () => {
  
  const error = useSelector(selectAuthError)

  return (
    <div>
      <LoginForm/>
      {error && <p>Oops, {error}</p>}
    </div>
  )
}

export default LoginPage

