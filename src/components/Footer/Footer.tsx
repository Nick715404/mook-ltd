import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <span className={styles.text}>Get help at</span>
            <a className={styles.mail} href="mailto: support@avgen.me">support@avgen.me</a>
          </div>
          <div className={styles.copy}>
            <span className={styles.top}>Copyright &copy; 2024 Mool Ltd</span>
            <span className={styles.bottom}>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer };