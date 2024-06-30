import React from "react";
import { TextField, TextFieldProps, TextFieldVariants } from "@mui/material";

type TextInputProps = Omit<TextFieldProps, "variant"> & {};

const DEFAULT_VALUE = {
  SIZE: "smalll" as TextFieldProps["size"],
  VARIANT: "outlined" as TextFieldVariants
};

export const TextInput: React.FC<TextInputProps> = ({
  size = DEFAULT_VALUE.SIZE,
  ...props
}) => {
  return <TextField variant={DEFAULT_VALUE.VARIANT} {...props} />;
};
