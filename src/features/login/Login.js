import LoginForm from "./LoginForm";
import AppHeader from "../../components/layout/AppHeader";

const Login = () => {
  return (
    <>
      <AppHeader
        logo="https://cdn.shopify.com/s/files/1/0250/7918/5456/t/14/assets/oslo-logo-blue_400x.png?v=7748166130095205641593456254"
        color="text-darkBlue"
        icon="https://cdn.shopify.com/s/files/1/0250/7918/5456/t/14/assets/cart-full-blue.png?v=35214544885686637441593456243"
      />
      <LoginForm />
    </>
  );
};

export default Login;
