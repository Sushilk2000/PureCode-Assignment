import { Controller } from "react-hook-form";
import DatePicker from "react-flatpickr";
import { LuAlertCircle } from "react-icons/lu";
import { cn } from "../utils/cn-merge";

const DateFormInput = ({
  control,
  id,
  name,
  label,
  className,
  labelClassName,
  containerClassName,
  noValidate,
  fullWidth,
  type,
  startInnerIcon,
  ...other
}) => {
  return (
    <Controller
      control={control}
      defaultValue={""}
      render={({ field, fieldState }) => (
        <div
          className={cn(containerClassName, "relative", fullWidth && "w-full")}
        >
          {label && (
            <label
              className={cn(
                "mb-2 block text-sm font-medium text-default-900",
                labelClassName
              )}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <div className={cn("relative", fullWidth && "w-full")}>
            {!noValidate && fieldState.error?.message && (
              <div className="pointer-events-none absolute inset-y-0 end-4 flex items-center">
                <LuAlertCircle size={20} className="text-red-500" />
              </div>
            )}

            {startInnerIcon && (
              <span className="absolute start-3 top-1/2 -translate-y-1/2">
                {startInnerIcon}
              </span>
            )}
          </div>
          {!noValidate && fieldState.error?.message && (
            <p className="mt-2 text-xs text-red-600">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
      name={name}
    />
  );
};

export default DateFormInput;
