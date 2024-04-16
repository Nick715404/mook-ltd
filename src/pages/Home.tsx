import { ProductList } from "../components/ProductList/ProductList";

const Home = () => {
  return (
    <div>
      <section>
        <div className="container">
          <ProductList />
        </div>
      </section>
    </div>
  )
}

export { Home };