import React, {useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {selectedProduct} from '../redux/actions/productActions'

const ProductDetails = () => {
  const product = useSelector((state) => state.product)
  const { productId } = useParams()
  const dispatch = useeDispatch()
  console.log(product)
  const fetchproductDetails = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/${productId}").catch(err => console.log("Err ", err))
  });


  dispatch(selectedProduct(response.data))
} 
useEffect(() => {
  if(productId && productId !== "") fetchProdutDetail()
}, [productId])
  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className=""
      </div>
    </div>
  );
};

export default ProductDetails;
