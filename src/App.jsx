import { data } from "autoprefixer";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch } = useForm({});

  const onSubmit = (data) => console.log(data);

  console.log(watch());
  const name = watch("name");

  return (
    <div className="min-h-screen bg-gray-400">
      <div className="h-[30vh] w-full bg-fuchsia-800 bg-mobile-hero-image bg-cover"></div>
      <div className="bg-[hsl(270, 3%, 87%)] h-[70vh] w-full px-4">
        <p>{name}</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-[  #21092f] font-bold	uppercase">cardholder name</p>
          <input
            {...register("name")}
            className="my-4 block w-full rounded-lg border-2	border-[#8e8593] bg-transparent p-2 placeholder:text-[#8e8593]"
            placeholder="e.g. Jane Appleseed"
          />

          <p className="text-[  #21092f] font-bold	uppercase">card number</p>
          <input
            {...register("card-number")}
            className="my-4 block w-full rounded-lg border-2	border-[#8e8593] bg-transparent p-2 placeholder:text-[#8e8593]"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </form>

        {/* <input type="submit" className=" block bg-red-500 px-2" /> */}
        {/* <button className="w-full  rounded-lg bg-[#21092f] py-2 text-white">
          Confirm
        </button> */}
      </div>
    </div>
  );
}
