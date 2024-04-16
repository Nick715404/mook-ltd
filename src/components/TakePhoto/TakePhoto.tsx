import { handleOpen } from '../../utils/btns.utils';
import styles from './TakePhoto.module.scss';

interface IProps {
  setOpen: any;
}

const TakePhoto = ({ setOpen }: IProps) => {
  return (
    <>
      <button onClick={() => handleOpen(setOpen)} className={styles.btn}>
        <img src="" alt="" />
        <span>Choose photo<br />from gallery</span>
      </button >
    </>
  )
}

export { TakePhoto };