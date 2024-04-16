import styles from './Placeholder.module.scss';
import { Link } from "react-router-dom";

const Placeholder = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.placeholder}>
          <div className={styles.imgBox}>
            <img className={styles.img} src="/lego.jpg" alt="" />
          </div>
          <div className={styles.bottom}>
            <Link className={styles.save} to={'/'}>Save</Link>
            <Link className={styles.more} to={'/'}>More pics</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Placeholder };