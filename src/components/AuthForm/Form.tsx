import styles from './AuthForm.module.scss';

interface Props {
  onOpen: (option: boolean) => void;
  isOpen: boolean;
}

const Form = ({ onOpen, isOpen }: Props) => {

  const handleClassName = isOpen ? `${styles.modal} ${styles.open}` : `${styles.modal}`;

  const handleClose = () => {
    onOpen(false)
  }

  return (
    <div className={handleClassName}>
      <form className={styles.form}>
        <div onClick={handleClose} className={styles.close}>
          <div className={styles.closeLine} />
          <div className={styles.closeLine} />
        </div>
        <input placeholder='Email' className={styles.email} type="email" />
        <input placeholder='Password' className={styles.pass} type="password" />
        <button className={styles.submit} type="submit">Sign In</button>
      </form>
    </div>
  )
}

export { Form };