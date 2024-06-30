import { FC } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material";

type ButtonProps = MuiButtonProps;

export const Button: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
