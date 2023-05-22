import React from 'react';
import { useParams } from 'react-router-dom';
import DetailedItem from '../../partials/shared/detailedItem/DetailedItem';
import ReviewSection from '../../partials/shared/reviews/ReviewSection';
import { ProductContext } from '../../../contexts/ProductProvider';

const Product = () => {

  const { id } = useParams();
  
  return (
    <>
      <DetailedItem />
      <ReviewSection />
    </>
  );
};

export default Product;