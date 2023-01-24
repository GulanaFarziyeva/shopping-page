import { useDispatch } from "react-redux";
import { addToCart, removeItem, removeItemfromCart } from "./cartSlice";

import { Close } from "../../assets/style/icons/icons";

const CartItem = ({ img, title, total, quantity, id, price }) => {
  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      addToCart({
        title,
        id,
        total,
        price,
      })
    );
  };
  const decrementItem = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="flex flex-col lg:flex-row w-[100%] items-center justify-between my-5">
      <div className="flex gap-4 items-center min-w-[40%]">
        <img src={img} alt={title} className="w-[120px]" />
        <div className="flex flex-col gap-2">
          <h4 className="text-darkBlue uppercase font-medium text-xl tracking-wider">
            {title}
          </h4>
          <p className="tracking-wide text-darkBlue">12 oz / Whole Bean</p>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-around w-[100%] mt-5">
        <div className="flex   border border-lightGrey">
          <button
            className="text-2xl font-light text-darkBlue  border border-lightGrey px-3"
            onClick={decrementItem}
          >
            -
          </button>
          <button className="text-l font-light text-darkBlue  border border-lightGrey px-3">
            {quantity}
          </button>
          <button
            className="text-xl font-light text-darkBlue  border border-lightGrey px-3"
            onClick={incrementItem}
          >
            +
          </button>
        </div>
        <div className="text-darkBlue font-light text-xl">${total}</div>
        <button
          className="mr-5 hidden sm:flex"
          onClick={() => dispatch(removeItemfromCart(id))}
        >
          <Close />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
