import shopData from "./shopData";
import ProductItem from "./ProductItem";

const Productlist = () => {
  return (
    <main className="flex flex-col md:flex-row md:flex-wrap py-5 overflow-x-hidden 2xl:max-w-[1440px] 2xl:mx-auto">
      {shopData.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </main>
  );
};

export default Productlist;
