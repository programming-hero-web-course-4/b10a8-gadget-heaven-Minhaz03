import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const WishlistGadget = ({ gadget,setTabIndex,wishlist,setWishlist }) => {
     const navigate = useNavigate()

  const { product_id, product_title, product_image, price, description } =
    gadget;

  const handleAddToCart = ()=>{
    setTabIndex(0);
  }
  const handleDeleteItemFromWishList = (id)=>{
    const currentItem =  wishlist.filter((item)=>item.product_id!==id)   
    setWishlist(currentItem);
  }


  return (
    <div>
      <div className="mx-auto bg-white shadow-md rounded-lg p-4 md:flex items-center flex-row">
        <div className="rounded-lg">
          <img className="w-[250px] h-[160px]" src={product_image} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{product_title}</h2>
          <p className="text-gray-500 text-base">Description: {description}</p>
          <p className="text-lg font-bold mt-2">Price: $ {price}</p>
          {/*  */}
          <button onClick={handleAddToCart} className="btn text-white bg-[#9538E2] mt-3">
            Add to Cart
          </button>
          {/*  */}
        </div>
        <button onClick={()=>handleDeleteItemFromWishList(product_id)} className="ml-4 text-red-500 hover:text-red-700 focus:outline-none">
          <MdDeleteForever  />
        </button>
      </div>
    </div>
  );
};

export default WishlistGadget;