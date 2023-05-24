import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import ProductCard from "../../Components/Card";
import Layout from "../../Components/Layout";

export interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

function Home() {
  const { shopItems } = useContext(ShopContext);
  return (
    <>
      <Layout>
        <p>Home</p>
        <div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          px-8 sm:px-4 md:px-0
        w-full max-w-screen-lg mx-auto"
        >
          {shopItems?.map((product) => (
            <ProductCard
              title={product.title}
              image={product.image}
              category={product.category}
              id={product.id}
              price={product.price}
              rating={product.rating}
              description={product.description}
              key={product.id}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Home;
