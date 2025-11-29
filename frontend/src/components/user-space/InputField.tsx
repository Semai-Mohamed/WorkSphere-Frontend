import { Controller } from "react-hook-form";

type Props = {
  type: string;
  placeholder: string;
  name: string;
  control: any; // control must be passed from parent
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = ({ type, placeholder, name, control, onChange }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input
          type={type}
          placeholder={placeholder}
          value={field.value || ""}
          onChange={(e) => {
            field.onChange(e); // update RHF + run Zod validation
            onChange?.(e);     // your custom update
          }}
          className="col-span-full resize-none"
        />
      )}
    />
  );
};
