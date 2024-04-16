import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.imgBox}>
      <img className={styles.img} src='' alt='' />
    </div>
  )
}

export { Loading };