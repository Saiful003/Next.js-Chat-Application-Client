import classNames from "classnames";
import { forwardRef } from "react";

interface IProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  isError: boolean;
  errorMessage: string;
}

const CustomInput = forwardRef<HTMLInputElement, IProps>(
  ({ label, name, type, placeholder, isError, errorMessage, ...rest }, ref) => {
    return (
      <div>
        <label className="block mb-1 text-gray-500" htmlFor={name}>
          {label} :
        </label>
        <input
          className={classNames("border w-full focus:outline-none p-2", {
            "mb-1": isError,
          })}
          placeholder={placeholder}
          type={type}
          id={name}
          name={name}
          {...rest}
          ref={ref}
        />
        {isError && (
          <span className="text-red-500 text-sm">{errorMessage}</span>
        )}
      </div>
    );
  }
);
CustomInput.displayName = "CustomComponent";
export default CustomInput;
