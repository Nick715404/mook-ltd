import styles from './ProductList.module.scss';

import { IProduct } from "../../interface/products";
import { fetchProducts } from "../../api/products";
import { Product } from "../Product/Product";

import { useQuery } from "react-query";
import { Loader } from '../Loader/Loader';

const ProductList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 'all'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={styles.list}>
      {data && data.map((product: IProduct, index: number) => {
        if (isLoading) {
          return <Loader key={index} />
        }
        return <Product key={product.id} data={product} />
      })}
    </div>
  )
}

export { ProductList };