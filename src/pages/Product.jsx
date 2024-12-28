import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useState, useEffect } from 'react';

const Product = () => {
  const params = useParams();  // Get the entire params object
  const { productId } = params;  // Destructure productId from params
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    console.log("useParams:", params);  // Log the params object
    if (!productId) {
      console.log("productId is missing or undefined");
      return; // Early return if productId is not available
    }

    const fetchProductData = () => {
      console.log("productId:", productId);  // Log productId to check its value
      console.log("products:", products);    // Log the products array

      const product = products.find((item) => {
        console.log("Comparing", item.id, "with", productId);  // Log item.id and productId during comparison
        return item.id === parseInt(productId);  // Ensure type consistency
      });

      if (product) {
        setProductData(product);
        console.log("Found product:", product);
      } else {
        console.log("Product not found");
      }
    };

    fetchProductData();
  }, [params, productId, products]);

  return (
    <div>
      {productData ? (
        <div>
          <h1>{productData.name}</h1>
          <p>{productData.description}</p>
          {/* Render other product details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
