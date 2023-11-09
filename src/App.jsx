import { data } from "autoprefixer";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch } = useForm({});

  const onSubmit = (data) => console.log(data);

  console.log(watch());
  const name = watch("name");

  return (
    <div className="min-h-screen bg-gray-400">
      <div className="h-60 w-full bg-mobile-hero-image bg-cover">
        <div className="relative mx-auto h-full max-w-md">
          {/* <div className="absolute right-5 top-10 h-3/5 w-3/4 max-w-[300px] bg-card-back bg-contain bg-right bg-no-repeat">
            <p className="absolute right-8 top-[58px] text-white">000</p>
          </div> */}
          <div className="absolute right-5 top-10 w-3/4 max-w-[300px] border-4 ">
            <img src={"./src/images/bg-card-back.png"} alt="" className="" />
            <p className="absolute right-[15%] top-[40%] text-white">000</p>
          </div>
          {/* <div className="absolute bottom-[-2.5rem] left-5 h-3/5 w-3/4 max-w-[300px] border-4 bg-card-front bg-contain bg-no-repeat">
            <p className="absolute left-8 top-[58px] text-white">
            <p className=" text-center text-white">0000 0000 0000 0000</p>
          </div> */}
          <div className="absolute left-5 top-32 w-3/4 max-w-[300px] border-4 ">
            <img src={"./src/images/bg-card-front.png"} alt="" className="" />
            <p className="top-0 h-0 px-4 text-white">0000 0000 0000 0000</p>
          </div>
        </div>
      </div>
      <div className="bg-[hsl(270, 3%, 87%)] h-[70vh] w-full px-4 pt-20">
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
