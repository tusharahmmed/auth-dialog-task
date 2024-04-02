import Image from "next/image";
import {Input} from "../ui/input";
import {useFormContext, Controller} from "react-hook-form";
import {getErrorMessageByPropertyName} from "@/utils/schema-validator";

const FormInput = ({name, type, value, placeholder, icon, id, validation}) => {
  const {
    control,
    formState: {errors},
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({field}) =>
          type === "password" ? (
            <>
              <div className="relative">
                <Input
                  className="bg-theme-white h-[48px] shadow-[0px 0px 4px 0px rgba(129, 129, 129, 0.25)] rounded-[90px] text-theme-dark font-roboto text-sm leading-[124.386%] pl-[48px] pr-5"
                  style={errorMessage ? {border: "1px solid #ff00006e"} : {}}
                  type={type}
                  placeholder={placeholder}
                  {...field}
                  value={value ? value : field.value}
                />
                <Image
                  className="absolute top-4 left-4"
                  src={icon}
                  alt="icon"
                  height={16}
                  width={16}
                />
                {errorMessage && (
                  <span className="absolute top-3.5 right-4 text-sm text-red-300 font-semibold">
                    {/* {errorMessage} */}
                    <Image
                      src={"/icon/error.png"}
                      height={20}
                      width={20}
                      alt="error"
                    />
                  </span>
                )}
              </div>
            </>
          ) : (
            <div className="relative">
              <Input
                className="bg-theme-white h-[48px] shadow-[0px 0px 4px 0px rgba(129, 129, 129, 0.25)] rounded-[90px] text-theme-dark font-roboto text-sm leading-[124.386%] pl-[48px] pr-5"
                style={errorMessage ? {border: "1px solid #ff00006e"} : {}}
                type={type}
                placeholder={placeholder}
                {...field}
                value={value ? value : field.value}
              />
              <Image
                className="absolute top-4 left-4"
                src={icon}
                alt="icon"
                height={16}
                width={16}
              />
              {errorMessage && (
                <span className="absolute top-3.5 right-4 text-sm text-red-300 font-semibold">
                  {/* {errorMessage} */}
                  <Image
                    src={"/icon/error.png"}
                    height={20}
                    width={20}
                    alt="error"
                  />
                </span>
              )}
            </div>
          )
        }
      />
    </>
  );
};

export default FormInput;
