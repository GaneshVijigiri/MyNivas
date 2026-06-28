import type { DropdownDTO } from "@/common/models/dropdown";
import { Field, FieldDescription, FieldLabel } from "../shadcn/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";

interface AppSelectProps {
  label: string;
  value: number | undefined;
  options: DropdownDTO[];
  onChange: (value: number) => void;
  placeholder: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}
const AppSelect = ({
  label,
  value,
  options,
  onChange,
  placeholder,
  className,
  disabled,
  error,
  required,
}: AppSelectProps) => {
  return (
    <Field className={className}>
      {label && (
        <FieldLabel>
          {label}
          {required && <span className="text-red-500">*</span>}
        </FieldLabel>
      )}
      <Select value={value?.toString()} onValueChange={(value) => {
        onChange(parseInt(value))
      }} disabled={disabled}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => {
            return (
              <SelectItem key={option.value} value={option.value.toString()}>
                {option.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      {error && (
        <FieldDescription className="text-red-500">{error}</FieldDescription>
      )}
    </Field>
  );
};

export default AppSelect;
