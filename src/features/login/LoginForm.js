import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("username"));

  return (
    <section className="flex flex-col gap-14 items-center mt-[200px]">
      <h2 className="text-3xl text-darkBlue">Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col m-auto w-[50%]"
      >
        <label className="mb-2 text-darkBlue text-lg tracking-wider">
          Email
        </label>
        <input
          className="border border-lightGray mb-2 text-darkBlue py-3 px-4"
          type="text"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="text-darkBlue tracking-wide">
            Username is required
          </span>
        )}

        <label className="mb-2 mt-5 text-darkBlue text-lg tracking-wider">
          Password
        </label>
        <input
          className="border border-lightGrey mb-2 py-3 px-4"
          {...register("password", { required: true })}
          type="password"
        />
        {errors.password && (
          <span className="text-darkBlue tracking-wide">
            Password is required
          </span>
        )}

        <p className="ml-auto mt-2 cursor-pointer hover:text-blue tracking-wider">
          Forgot your password?
        </p>

        <div className="mt-10 flex gap-10">
          <input
            type="submit"
            className="border border-darkBlue color-darkBlue text-lg tracking-wider px-8 py-4 cursor-pointer uppercase hover:bg-darkBlue hover:text-white"
            value="Sign in"
          />
          <button className="border border-darkBlue color-darkBlue text-lg tracking-wider px-8 py-4 uppercase hover:bg-darkBlue hover:text-white">
            Create account
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
