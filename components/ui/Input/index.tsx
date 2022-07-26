import { NextPage } from "next";
import { IInput } from "types";

export const Input: NextPage<IInput> = (props) => {
  const { label, placeholder, name, onChange, error, type = "text" } = props;

  return (
    <div>
      {label ? (
        <label className="block mb-2 text-white text-base">{label}</label>
      ) : null}
      <input
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        className={`border  rounded-[4px] p-4 placeholder-grey
         !bg-transparent w-full focus:outline-0
        text-white  ${
          error ? "border-error" : "border-border-white focus:border-white"
        }`}
        type={type}
      />
      {error ? (
        <span className="text-error text-base mt-2 flex">{error}</span>
      ) : null}
    </div>
  );
};
