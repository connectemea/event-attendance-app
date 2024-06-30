import { FC } from "react";
import { SelectProps as MuiSelectProps } from "@mui/material/Select";
import { MenuItem, Select } from "@mui/material";
import { Option } from "@/types/Option.types";

type SelectInputProps = Omit<MuiSelectProps, "variant"> & {
  option: Option[];
};

export const SelectInput: FC<SelectInputProps> = (props) => {
  return (
    <Select {...props}>
      {props.option.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};
