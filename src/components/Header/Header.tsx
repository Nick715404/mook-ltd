import { AuthForm } from '../AuthForm/AuthForm';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <span className={styles.logo}>OpenAI</span>
          <AuthForm />
        </div>
      </div>
    </header>
  )
};

export { Header };