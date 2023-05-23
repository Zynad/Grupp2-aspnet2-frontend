import React from 'react';
import { useParams } from 'react-router-dom';
import DetailedItem from '../../partials/shared/detailedItem/DetailedItem';
import ReviewSection from '../../partials/shared/reviews/ReviewSection';
import { ProductContext } from '../../../contexts/ProductProvider';
import { useContext } from 'react';

const Product = () => {
  
  const { id } = useParams();
  const { item } = useContext(ProductContext);

  
  return (
    <>
      <DetailedItem item={ item } />
      <ReviewSection item={ item } />
    </>
  );
};

export default Product;