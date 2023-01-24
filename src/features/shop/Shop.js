import AppHeader from "../../components/layout/AppHeader";
import Hero from "./Hero";
import Productlist from "./Productlist";
import AppFooter from "../../components/layout/AppFooter";

const Shop = () => {
  return (
    <>
      <AppHeader
        logo="https://cdn.shopify.com/s/files/1/0250/7918/5456/t/14/assets/oslo-logo-white_400x.png?v=20527188679633558461593456254"
        color="text-white"
        icon="https://cdn.shopify.com/s/files/1/0250/7918/5456/t/14/assets/cart-full.png?v=170556504666224904311593456244"
      />
      <Hero />
      <Productlist />
      <AppFooter />
    </>
  );
};
export default Shop;
