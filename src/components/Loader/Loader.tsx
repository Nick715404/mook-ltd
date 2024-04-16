import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <div key={index} className={`${styles.product} ${styles.loading}`}>
          <div className={styles.imgBox}></div>
          <div className={styles.titleBox}>
            <h3 className={styles.title}></h3>
          </div>
        </div>
      ))}
    </>
  )
};

export { Loader };