import type { DropdownDTO } from "@/common/models/dropdown";
import { Field, FieldDescription, FieldLabel } from "../shadcn/field";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  useComboboxAnchor,
} from "../shadcn/combobox";
import { useState, useRef } from "react";

interface AppMultiSelectProps {
  label: string;
  value: number[] | undefined;
  options: DropdownDTO[];
  onChange: (value: number[]) => void;
  placeholder: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}
const AppMultiSelect = ({
  label,
  onChange,
  options,
  placeholder,
  value,
  className,
  disabled,
  error,
  required,
}: AppMultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const isSelectingRef = useRef(false);

  const handleOpenChange = (newOpen: boolean) => {
    // Ignore the close event that happens during selection/deselection
    if (!newOpen && isSelectingRef.current) {
      setOpen(true);
      isSelectingRef.current = false;
    } else {
      setOpen(newOpen);
    }
  };

  return (
    <Field className={className}>
      {label && (
        <FieldLabel>
          {label}
          {required && <span className="text-red-500">*</span>}
        </FieldLabel>
      )}
      <Combobox
        multiple
        items={options}
        value={value?.map((x) => x.toString())}
        onValueChange={(values) => {
          isSelectingRef.current = true;
          onChange(values.map((value) => parseInt(value)));
        }}
        disabled={disabled}
        open={open}
        onOpenChange={handleOpenChange}
      >
        <ComboboxInput
          placeholder={placeholder}
          showClear
          value={
            value && value.length > 0
              ? `${value.length} item${value.length === 1 ? "" : "s"} selected`
              : ""
          }
        />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item: DropdownDTO) => (
              <ComboboxItem key={item.value} value={item.value}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      {error && (
        <FieldDescription className="text-red-500">{error}</FieldDescription>
      )}
    </Field>
  );
};

export default AppMultiSelect;
