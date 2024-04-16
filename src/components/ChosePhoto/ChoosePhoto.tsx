import { handleOpen } from '../../utils/btns.utils';
import styles from './ChoosePhoto.module.scss';

interface IProps {
  setOpen: any;
}

const ChoosePhoto = ({ setOpen }: IProps) => {
  return (
    <>
      <button onClick={() => handleOpen(setOpen)} className={styles.btn}>
        <img className={styles.icon} src="" alt="" />
        <span className={styles.text}>Take photo<br /> with camera</span>
      </button>
    </>
  )
}

export { ChoosePhoto };