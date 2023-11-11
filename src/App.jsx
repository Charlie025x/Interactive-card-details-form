import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export default function App() {
  const { register, handleSubmit, watch, control, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);

  const name = watch("name");
  const cardNumber = watch("cardNumber");
  const cvc = watch("cvc");
  const mm = watch("date");
  const yy = watch("dateY");

  return (
    <div className="min-h-screen bg-gray-400">
      {/* card container */}
      <div className="h-60 w-full bg-mobile-hero-image bg-cover">
        <div className="relative mx-auto h-full max-w-md">
          {/* card back */}
          <div className="absolute right-5 top-10 w-3/4 max-w-[300px]">
            <img src={"./src/images/bg-card-back.png"} alt="" className="" />
            <p className="absolute right-[15%] top-[44%] text-xs text-white">
              {cvc || "000"}
            </p>
          </div>
          {/* card front */}
          <div className="absolute left-5 top-32 w-3/4 max-w-[300px]">
            <img src={"./src/images/bg-card-front.png"} alt="" />
            <div className="absolute top-4">
              <div className="flex items-center">
                <div className=" ml-4 h-6 w-6 rounded-full bg-white"></div>
                <div className="ml-2  h-4 w-4 rounded-full border"></div>
              </div>
            </div>
            <div className="absolute bottom-4 w-full px-4 text-justify text-white">
              <p className="pb-3 text-justify">
                {cardNumber || "0000 0000 0000 0000"}
              </p>
              <div className="flex justify-between text-xs">
                <p className="">{name || "JANE APPLESEED"}</p>
                <p className="">
                  {mm || "00"}/{yy || "00"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form container */}
      <div className="bg-[hsl(270, 3%, 87%)] mx-auto h-[70vh] w-full max-w-2xl px-4 pt-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="grid grid-cols-4 gap-4"
        >
          <div className="col-span-4">
            <label htmlFor="name" className="font-bold uppercase	text-[#21092f]">
              cardholder name
            </label>
            <input
              type="text"
              id="name"
              maxLength={30}
              {...register("name", { required: "can't be blank" })}
              className="my-4 block w-full rounded-lg border-2	border-[#8e8593] bg-transparent p-2 placeholder:text-[#8e8593]"
              placeholder="e.g. Jane Appleseed"
            />
            <p className="translate-y-[-.75rem] text-red-600">
              {errors.name?.message}
            </p>
          </div>

          <div className="col-span-4">
            <label
              htmlFor="cardNumber"
              className="font-bold uppercase text-[#21092f]"
            >
              card number
            </label>
            {/* check for non numbers and add error message */}
            <input
              type="text"
              id="cardNumber"
              maxLength={16}
              {...register("cardNumber", {
                required: "can't be blank",
                pattern: {
                  value: /[0-9]/,
                  message: "Wrong format, numbers only",
                },
                maxLength: 16,
              })}
              className="my-4 block w-full rounded-lg border-2	border-[#8e8593] bg-transparent p-2 placeholder:text-[#8e8593]"
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <p className="col-span-4 translate-y-[-.75rem] text-red-600">
              {errors.cardNumber?.message}
            </p>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="dateM"
              className="font-bold	uppercase text-[#21092f]"
            >
              exp. date (mm/yy)
            </label>
            {/* TODO: concatenate the dateY into the date state */}
            <div className="flex gap-4">
              <input
                type="text"
                id="date"
                maxLength={2}
                {...register("date", {
                  required: "can't be blank",
                  pattern: {
                    value: /[0-9]/,
                    message: "Wrong format, numbers only",
                  },
                  minLength: {
                    value: 2,
                    message: "Enter 2 digit value",
                  },
                })}
                className="my-4 w-full rounded-lg	border-2 border-[#8e8593] bg-transparent p-2 placeholder:text-[#8e8593]"
                placeholder="MM"
              />
              <input
                type="text"
                id="dateY"
                maxLength={2}
                {...register("dateY", {
                  required: "can't be blank",
                  pattern: {
                    value: /[0-9]/,
                    message: "Wrong format, numbers only",
                  },
                  minLength: {
                    value: 2,
                    message: "Enter 2 digit value",
                  },
                })}
                className="my-4 w-full rounded-lg	border-2 border-[#8e8593] bg-transparent p-2 placeholder:text-[#8e8593]"
                placeholder="YY"
              />
            </div>
            <p className="translate-y-[-.75rem] text-red-600">
              {errors.date?.message || errors.dateY?.message}
            </p>
          </div>

          <div className="col-span-2">
            <label htmlFor="cvc" className="font-bold uppercase	text-[#21092f]">
              cvc
            </label>
            <input
              type="text"
              id="cvc"
              maxLength={3}
              {...register("cvc", {
                required: "can't be blank",
                pattern: {
                  value: /[0-9]/,
                  message: "Wrong format, numbers only",
                },
                minLength: {
                  value: 2,
                  message: "Enter 3 digit value",
                },
              })}
              className="my-4 block w-full rounded-lg border-2	border-[#8e8593] bg-transparent p-2 placeholder:text-[#8e8593]"
              placeholder="e.g. 123"
            />
            <p className="translate-y-[-.75rem] text-red-600">
              {errors.cvc?.message}
            </p>
          </div>

          <button className="col-span-4  w-full rounded-lg bg-[#21092f] py-2 text-white">
            Confirm
          </button>
        </form>
        <DevTool control={control} />

        {/* <input type="submit" className=" block bg-red-500 px-2" /> */}
        {/* <button className="w-full  rounded-lg bg-[#21092f] py-2 text-white">
          Confirm
        </button> */}
      </div>
    </div>
  );
}
