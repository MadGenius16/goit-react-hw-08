import css from './HomePage.module.css'

const HomePage = () => {

  return (
    <div className={css.container}>
            <h1 className={css.title}>Welcome to the contact manager program</h1>
            <p className={css.text}>You want software that is simple to use, easy to learn, useful to use, and has the functionality that suits you.
            To create a contact book, you must register or log in.</p> 
            
        </div>
  )
}

export default HomePage