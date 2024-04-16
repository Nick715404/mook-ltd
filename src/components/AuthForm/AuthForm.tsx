import { useState } from 'react';
import styles from './AuthForm.module.scss';
import { Form } from './Form';

const AuthForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  }

  return (
    <>
      <button className={styles.btn} onClick={handleClick}>
        Sign In
      </button>
      <Form isOpen={open} onOpen={setOpen} />
    </>
  )
};

export { AuthForm };