import { Link } from 'react-router-dom';
import { IProduct } from '../../interface/products';
import styles from './Product.module.scss';

interface Props {
  data: IProduct
}

const Product = ({ data }: Props) => {
  return (
    <Link to={`/product/${data.id}`}>
      <div className={styles.product}>
        <div className={styles.imgBox}>
          <img className={styles.img} src={data.image} alt={data.title} />
        </div>
        <div className={styles.titleBox}>
          <h3 className={styles.title}>{data.title}</h3>
        </div>
      </div>
    </Link>
  )
}

export { Product };