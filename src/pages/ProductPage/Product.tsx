import styles from './Product.module.scss';

import { fetchSingleProducts } from "../../api/products";

import { TakePhoto } from "../../components/TakePhoto/TakePhoto";
import { ChoosePhoto } from "../../components/ChosePhoto/ChoosePhoto";

import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Loading } from './Loading/Loading';
import { useState } from 'react';
import { Placeholder } from '../../components/Placeholder/Placeholder';

const isNotEmpty = (id: string | undefined) => {
  if (id) {
    return fetchSingleProducts(+id);
  }
};

const Product = () => {
  const [open, setOpen] = useState<boolean | null>(null);
  const params = useParams();
  const id = params?.id;

  const { data, isLoading } = useQuery(
    ['product', 'single', id],
    async () => isNotEmpty(id)
  );

  if (open) {
    return (
      <Placeholder />
    )
  }

  return (
    <div className={styles.product}>
      <section className={styles.productContent}>
        <div className="container">
          <div className={styles.backBox}>
            <Link className={styles.backBtn} to={'/'}>
              <img width={30} src="/backIcon.svg" alt="" />
              <span>Go back</span>
            </Link>
          </div>
          {isLoading
            ?
            <Loading />
            :
            <div className={styles.imgBox}>
              <img className={styles.img} src={data && data.image} alt={data && data.title} />
            </div>
          }
          <div className={styles.bottom}>
            <TakePhoto setOpen={setOpen} />
            <ChoosePhoto setOpen={setOpen} />
          </div>
        </div>
      </section>

    </div>
  )
}

export { Product };