import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const navLink = [
  {
    id: 1,
    name: "About",
    to: "/",
  },
  {
    id: 2,
    name: "Shop",
    to: "/",
  },
  {
    id: 3,
    name: "Subscribe",
    to: "/",
  },
  {
    id: 4,
    name: "wholesale",
    to: "/",
  },
  {
    id: 5,
    name: "Locations",
    to: "/",
  },
];

const AppHeader = ({ logo, color, icon }) => {
  const quantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="flex justify-between items-center px-10 absolute top-0 left-0 w-[100vw] h-[160px]">
      <div>
        <NavLink to="/">
          <img className="w-[180px]" src={logo} alt="Oslo coffee" />
        </NavLink>
      </div>
      <div className="flex flex-col mr-10 gap-10 h-[100%] items-center justify-center">
        <ul className="flex gap-5 ml-auto items-center justify-center">
          <li
            className={`${color} font-medium cursor-pointer  uppercase text-lg tracking-widest mt-2`}
          >
            <NavLink to="/login">login</NavLink>
          </li>
          <li className="cursor-pointer relative">
            <NavLink to="/cart">
              <img className="w-[30px]" src={icon} alt="img" />
              {quantity > 0 && (
                <p className="absolute bottom-5 rounded-[50%] px-2 py-0.5 left-6 bg-white text-darkBlue text-[13px] font-bold">
                  {quantity}
                </p>
              )}
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-5 items-center">
          {navLink.map((item) => (
            <li
              className={`${color} font-medium cursor-pointer  uppercase text-lg tracking-widest mt-2`}
              key={item.id}
            >
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
