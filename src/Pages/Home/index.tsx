import { useEffect, useState } from 'react'
import ProductCard from "../../Components/Card";
import Layout from "../../Components/Layout";

export interface ProductCard {
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

const fetchProducts = async () => {
  const products: ProductCard[] = await fetch('https://fakestoreapi.com/products').then(res => res.json())
  console.log(products)
}

function Home() {

  const [products, setProducts] = useState([])

  return (
    <>
      <Layout>
        <p>Home</p>
        <ProductCard />
      </Layout>
    </>
  );
}

export default Home;
