import { useEffect, useState } from 'react'
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

  const [products, setProducts] = useState<ProductData[]>([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=2')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <Layout>
        <p>Home</p>
        {products?.map((product) => (
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
      </Layout>
    </>
  );
}

export default Home;
