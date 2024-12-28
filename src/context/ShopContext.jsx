import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { products } from "../assets/assets";
export const ShopContext = createContext();

const ShopContextProvider=(props)=>{
    

    const currency = "$";
  const delivery_fee = "10";
  const [search,setSearch]= useState('');
   const[showSearch,setShowSearch]=useState(false)

  const value = {
    products,
    currency,
    delivery_fee,
    search,setSearch,showSearch,setShowSearch,
  };

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;