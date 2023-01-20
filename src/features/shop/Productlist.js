import shopData from "./shopData";
import ProductItem from "./ProductItem";

const Productlist = () => {
  return (
    <main className="flex flex-wrap py-20">
      {shopData.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </main>
  );
};

export default Productlist;
