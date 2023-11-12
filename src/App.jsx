import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

export default function App() {
  const { register, handleSubmit, watch, control, formState, setValue, reset } =
    useForm();
  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

  const onSubmit = (data) => console.log(data);

  const name = watch("name");
  const cardNumber = watch("cardNumber");
  const cvc = watch("cvc");
  const mm = watch("date");
  const yy = watch("dateY");

  return (
    <div className="min-h-screen lg:flex">
      {/* card container */}
      <div className="h-60 w-full bg-mobile-hero-image bg-cover lg:h-screen lg:w-2/6 lg:bg-desktop-hero-image">
        <div className="relative mx-auto h-full max-w-md lg:flex  lg:flex-col-reverse lg:items-end lg:justify-center lg:gap-6">
          {/* card back */}
          <div className="absolute right-5 top-10 w-3/4 max-w-[300px] lg:relative lg:left-2/4 lg:top-0">
            <img src={"./src/images/bg-card-back.png"} alt="" className="" />
            <p className="absolute right-[15%] top-[44%] text-xs text-white">
              {cvc || "000"}
            </p>
          </div>
          {/* card front */}
          <div className="absolute left-5 top-32 w-3/4 max-w-[300px] lg:relative lg:left-1/4 lg:top-0">
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
      <div className="mx-auto h-[70vh] w-full max-w-2xl px-4 pt-20  lg:flex lg:h-screen lg:w-4/6 lg:max-w-lg lg:items-center lg:pl-32 lg:pt-0">
        {!isSubmitSuccessful && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid grid-cols-4 gap-4"
          >
            <div className="col-span-4">
              <label
                htmlFor="name"
                className="font-bold uppercase	text-[#21092f]"
              >
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
                maxLength={19}
                {...register("cardNumber", {
                  required: "can't be blank",
                  pattern: {
                    value: /[0-9]/,
                    message: "Wrong format, numbers only",
                  },
                  // maxLength: 16,
                })}
                className="my-4 block w-full rounded-lg border-2	border-[#8e8593] bg-transparent p-2 placeholder:text-[#8e8593]"
                placeholder="e.g. 1234 5678 9123 0000"
                onKeyDown={(e) => {
                  const backspacePressed = e.key !== "Backspace";
                  const currentValue = e.currentTarget.value;
                  if (backspacePressed) {
                    const lengthNoSpaces = currentValue.replace(
                      / /g,
                      "",
                    ).length;
                    if (
                      lengthNoSpaces !== 0 &&
                      lengthNoSpaces % 4 === 0 &&
                      currentValue.length < 17
                    ) {
                      setValue("cardNumber", currentValue + " ");
                    }
                  } else {
                    if (currentValue[currentValue.length - 2] === " ") {
                      setValue(
                        "cardNumber",
                        currentValue.substr(0, currentValue.length - 1),
                      );
                    }
                  }
                }}
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
              <label
                htmlFor="cvc"
                className="font-bold uppercase	text-[#21092f]"
              >
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

            <button
              // disabled={!isDirty || !isValid}
              className="col-span-4  w-full rounded-lg bg-[#21092f] py-2 text-white"
            >
              Confirm
            </button>
          </form>
        )}
        <DevTool control={control} />

        {isSubmitSuccessful && (
          <div className=" flex flex-col items-center gap-4 text-center">
            <img
              className=" my-4 w-24"
              src="./src/images/icon-complete.svg"
              alt=""
            />
            <h1 className="text-3xl uppercase tracking-wider text-[#21092f]">
              thank you!
            </h1>
            <p className="mb-4 text-[#8e8593]">We've added your card details</p>
            <button
              onClick={() => reset()}
              className="col-span-4  w-full max-w-lg rounded-lg bg-[#21092f] py-2 text-white"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
