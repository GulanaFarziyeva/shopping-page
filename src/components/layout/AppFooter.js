import navLink from "./navLinkData";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const dataLocations = [
  {
    id: 1,
    title: "133 ROEBLING ST, WILLIAMSBURG",
    text: ["Mon - Fri: 7am to 4pm", "Sat - Sun: 8am to 4pm"],
  },
  {
    id: 2,
    title: "328 BEFORD AVE, WILLIAMSBURG",
    text: ["Mon - Fri: 7:30am to 3pm", "Sat - Sun: 8am to 3pm"],
  },
  {
    id: 3,
    title: "422 E. 75TH ST, YORKVILLE",
    text: ["Mon - Fri: 7am to 4pm", "Sat - Sun: 8am to 4pm"],
  },
];

const dataContact = [
  "M-F 9AM – 5PM ET",
  "P: 718-782-0332",
  "Donation Requests",
  "Employment",
  "Contact Form",
];

const AppFooter = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <footer className="overflow-x-hidden md:mt-5 flex flex-col lg:flex-nowrap md:flex-row flex-wrap justify-center items-center md:items-start relative gap-8 md:justify-around pb-14 pt-5 md:pt-48 w-[100vw] xl:pt-5 xl:px-5 ">
      <div className=" mt-32 md:mt-0 flex flex-col gap-2 items-center justify-center  basis-1/4 lg:basis-auto">
        <h4 className="text-mdBlue uppercase text-base tracking-widest font-bold">
          Navigation
        </h4>
        <ul>
          {navLink.map((item) => (
            <li
              className="text-mdBlue text-base tracking-wider mb-1"
              key={item.id}
            >
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          ))}
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="basis-1/4">
        <ul className="flex flex-col gap-5">
          {dataLocations.map((item) => (
            <li className="flex flex-col items-center" key={item.id}>
              <h4 className="text-mdBlue uppercase text-base tracking-widest font-bold mb-1 text-center">
                {item.title}
              </h4>
              {item.text.map((item, index) => (
                <p
                  className="text-mdBlue text-base tracking-wider text-center"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute top-0 xl:relative lg:my-auto">
        <img
          src="https://cdn.shopify.com/s/files/1/0250/7918/5456/t/14/assets/oslo-logo-blue_400x.png?v=7748166130095205641593456254"
          alt="Oslo"
          className="w-[140px] md:min-w-[200px]"
        />
      </div>
      <div className="flex flex-col gap-2 basis-1/4 lg:basis-auto">
        <h4 className="text-mdBlue uppercase text-base tracking-widest font-bold mb-1">
          Contact
        </h4>
        <ul className="flex flex-col gap-1">
          {dataContact.map((item, index) => (
            <li className="text-mdBlue text-base tracking-wider" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-[100%] md:w-auto flex flex-col gap-3 items-center md:mt-5 lg:mt-0">
        <h4 className="text-mdBlue uppercase text-base tracking-widest font-bold mb-1">
          Email signup
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col m-auto "
        >
          <input
            className="border border-mdBlue mb-2 text-darkBlue  py-3 px-4"
            type="text"
            placeholder="First Name"
            {...register("firstname", { required: true })}
          />

          <input
            className="border border-mdBlue mb-2 text-darkBlue py-3 px-4"
            type="text"
            placeholder="Last Name"
            {...register("lastname", { required: true })}
          />

          <input
            className="border border-mdBlue mb-2 py-3 px-4"
            {...register("Email", { required: true })}
            type="Email"
            placeholder="Email"
          />

          <div className="mt-5 flex gap-10">
            <input
              type="submit"
              className="border border-darkBlue color-darkBlue text-lg tracking-wider w-[100%] py-4 cursor-pointer uppercase hover:bg-darkBlue hover:text-white"
              value="Sign in"
            />
          </div>
        </form>
      </div>
      <span className="text-mdBlue absolute bottom-4 xl:ml-20 lg:ml-0 mt-10 xl:mt-5 text-center">
        © 2023, Oslo Coffee Roasters
      </span>
    </footer>
  );
};

export default AppFooter;
