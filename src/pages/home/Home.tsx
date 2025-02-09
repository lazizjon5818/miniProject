import React from "react";
import Product from "../../components/product/Product";
import { useGetProductsQuery } from '../../redux/productsApi';
import HeroBG from "./HeroBG";
import Loading from "../../config/Loading";

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery(12);

  if (isLoading) {
    return <p><Loading/></p>;
  }

  if (error) {
    return <p>Failed to fetch products. Please try again later.</p>;
  }

  const products = data?.products || [];

  return (
    <div className="flex flex-col items-center w-full gap-8 ">
      <HeroBG  />
      <Product products={products} />
    </div>
  );  
};

export default React.memo(Home);
