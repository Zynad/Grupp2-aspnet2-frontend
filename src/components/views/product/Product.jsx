import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailedItem from '../../partials/shared/detailedItem/DetailedItem';
import ReviewSection from '../../partials/shared/reviews/ReviewSection';
import { ProductContext } from '../../../contexts/ProductProvider';
import { useContext } from 'react';
import Header from '../../partials/header/Header';
import { ApiContext } from '../../../contexts/ApiProvider';



const Product = () => {
  const { getProductByIdAsync } = useContext(ApiContext);
  const { id } = useParams();
  const { item, designateDetailedItem } = useContext(ProductContext);
  const [ showReview, setShowReview ] = useState(false);

  const setDetailedItem = async () => {
    const item = await getProductByIdAsync(id)
    await designateDetailedItem(item)
    setShowReview(true)
  }

  useEffect(() => {
    setDetailedItem()
  }, []);

 
    return (
    <>
    <div className="container mt-5">
    <Header route={"/home"} title={"Manero"}/>
    </div>
      
      <DetailedItem item={item} />
      {showReview && <ReviewSection item={ item }/>}       
    </>
  );
  
  
};

export default Product;