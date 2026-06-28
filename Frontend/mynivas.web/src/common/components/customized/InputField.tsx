import { Field, FieldDescription, FieldLabel } from "../shadcn/field";
import { Input } from "../shadcn/input";

interface InputFieldProps {
  label: string;
  value: string;
  type?: "text" | "password" | "email" | "number";
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}
const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  className,
  error,
  required,
  disabled
}: InputFieldProps) => {
  return (
    <Field>
      {label && (
        <FieldLabel htmlFor={label.toLowerCase()}>
          {label}
          {required && <span className="text-red-500">*</span>}
        </FieldLabel>
      )}
      <Input
        id={label.toLowerCase()}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
      />
      {error && <FieldDescription className="text-red-500">{error}</FieldDescription>}
    </Field>
  );
};

export default InputField;
