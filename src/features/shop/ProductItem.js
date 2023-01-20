import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();

  const addToBag = () => {
    dispatch(
      addToCart({
        title: item.title,
        id: item.id,
        price: item.price,
        img: item.img[0],
      })
    );
  };
  return (
    <div className="cart flex flex-col w-1/3 items-center cursor-pointer relative">
      <div className="cart-img z-50">
        <img src={item.img[0]} alt={item.title} className="min-h-[448px]" />
      </div>
      <div className="cart-zoom-img hidden z-50">
        <img src={item.img[1]} alt={item.title} className="min-h-[448px]" />
      </div>
      <h4 className="mt-6 mb-4 text-[#0e1f52] tracking-wider text-xl font-normal">
        {item.title}
      </h4>
      <h6 className="text-blue text-base tracking-wider">${item.price}</h6>
      <div className="overlay hidden bg-mdBlue min-w-[350px] absolute bottom-[22%]">
        <img
          className="w-[40px] my-8 mx-5 z-50"
          src="//cdn.shopify.com/s/files/1/0250/7918/5456/t/14/assets/cart-add.png?v=20397682492604608851593456242"
          alt="img"
          onClick={addToBag}
        />
      </div>
    </div>
  );
};

export default ProductItem;
