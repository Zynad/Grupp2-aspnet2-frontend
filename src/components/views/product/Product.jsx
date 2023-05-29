import React from 'react';
import { useParams } from 'react-router-dom';
import DetailedItem from '../../partials/shared/detailedItem/DetailedItem';
import ReviewSection from '../../partials/shared/reviews/ReviewSection';
import { ProductContext } from '../../../contexts/ProductProvider';
import { useContext } from 'react';
import Header from '../../partials/header/Header';

const Product = () => {
  
  const { id } = useParams();
  const { item } = useContext(ProductContext);

  
  return (
    <>
      <Header route={"/home"} title={"Manero"}/>
      <DetailedItem item={ item } />
      <ReviewSection item={ item } />
    </>
  );
};

export default Product;