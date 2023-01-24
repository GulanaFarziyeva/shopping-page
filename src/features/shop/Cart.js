import { useSelector } from "react-redux";

import AppHeader from "../../components/layout/AppHeader";
import CartItem from "./CartItem";
import { NoSymbol } from "../../assets/style/icons/icons";
import AppFooter from "../../components/layout/AppFooter";

const Cart = () => {
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <>
      <AppHeader
        logo="https://cdn.shopify.com/s/files/1/0250/7918/5456/t/14/assets/oslo-logo-blue_400x.png?v=7748166130095205641593456254"
        color="text-darkBlue"
        icon="https://cdn.shopify.com/s/files/1/0250/7918/5456/t/14/assets/cart-full-blue.png?v=35214544885686637441593456243"
      />
      <section className=" mt-48 sm:mt-56 flex flex-col items-center  w-[80%] mx-auto pr-5">
        <div className="flex justify-center items-center mb-10">
          <h2 className="text-darkBlue uppercase text-3xl font-medium tracking-wider">
            Shopping Cart
          </h2>
        </div>
        <ul className="divide-y divide-lightGrey w-[100%]">
          {itemsList.length < 1 && (
            <div className="mb-32 flex justify-center items-center gap-4">
              <h2 className="text-darkBlue text-xl tracking-wide">
                Your Bag is Empty
              </h2>
              <NoSymbol />
            </div>
          )}
          {itemsList.length > 0 &&
            itemsList.map((item) => (
              <li key={item.id}>
                <CartItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  total={item.totalPrice}
                  img={item.img}
                  quantity={item.quantity}
                />
              </li>
            ))}
        </ul>

        <div className="mt-10 w-[100%] flex justify-end items-center gap-2 px-5 mb-20">
          <h5 className="text-darkBlue text-lg tracking-wide">Total:</h5>
          <h5 className="text-darkBlue text-lg tracking-wide">${total}</h5>
        </div>
      </section>
      <AppFooter />
    </>
  );
};

export default Cart;
