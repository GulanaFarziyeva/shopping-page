import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  CloseBtn,
  Facebook,
  Instagram,
  Search,
} from "../../assets/style/icons/icons";
import { useState } from "react";

import navLink from "./navLinkData";

import { HiBars3 } from "react-icons/hi2";

const AppHeader = ({ logo, color, icon }) => {
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between md:items-center md:px-5 lg:px-10  absolute top-0 left-0 w-[100vw] h-[160px]">
      <div>
        <NavLink to="/">
          <img
            className=" w-[120px] sm:w-[180px] mt-10 sm:mt-6 ml-5 md:ml-0"
            src={logo}
            alt="Oslo coffee"
          />
        </NavLink>
      </div>
      <div className="flex flex-col mr-10 md:gap-6  md:h-[60%] items-center justify-center">
        <ul className="gap-5 flex ml-auto items-center justify-center">
          <li
            className={`${color} hover-item font-normal cursor-pointer  uppercase text-xl tracking-widest mt-2 hidden lg:flex`}
          >
            <NavLink to="/">login</NavLink>
          </li>
          <li className="cursor-pointer relative hover-item">
            <NavLink to="/cart">
              <img className="w-[30px]" src={icon} alt="img" />
              {quantity > 0 && (
                <p className="absolute bottom-5 rounded-[50%] px-2 py-0.5 left-6 bg-white text-darkBlue text-[13px] font-bold">
                  {quantity}
                </p>
              )}
            </NavLink>
          </li>
          <li className="lg:hidden cursor-pointer mt-2" onClick={openMenu}>
            <HiBars3 className={`${color} text-[34px]`} />
          </li>
        </ul>
        {!isOpen && (
          <ul className="z-50 gap-5 hidden lg:flex">
            {navLink.map((item) => (
              <li
                className={`${color} ${item.className} hover-item z-50 font-normal cursor-pointer uppercase text-xl tracking-widest mt-2`}
                key={item.id}
              >
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        )}

        {isOpen && (
          <ul className="responsive-menu flex flex-col z-50 text-lg overflow-y-scroll h-screen gap-5 px-6 py-5 absolute top-0 left-0  bg-blue">
            <li className=" cursor-pointer" onClick={openMenu}>
              <CloseBtn />
            </li>
            {navLink.map((item) => (
              <li
                className={`${item.className} text-white font-medium cursor-pointer text-lg  md:uppercase md:text-base  tracking-widest mt-2`}
                key={item.id}
              >
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            ))}
            <li className="flex  border border-white px-10 py-3  my-3">
              <input
                placeholder="Search our store..."
                className="bg-transparent border-none outline-none text-white"
              />
              <Search />
            </li>
            <li className="text-white flex flex-col gap-2">
              <h5 className="tracking-widest font-medium text-lg mb-3">
                Contact
              </h5>
              <p className="cursor-pointer">718-782-0332</p>
              <p className="cursor-pointer">sales@oslocoffee.com</p>
              <p className="flex gap-2 mt-4">
                <span className="cursor-pointer">
                  <Facebook />
                </span>
                <span className="cursor-pointer">
                  <Instagram />
                </span>
              </p>
            </li>
            <li>
              <NavLink to="/">
                <img
                  className="w-[250px]"
                  src="https://cdn.shopify.com/s/files/1/0250/7918/5456/files/oslo-logo_360x.png?v=1613716611"
                  alt="Oslo coffee"
                />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
