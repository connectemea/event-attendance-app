import React, { FC } from "react";
import {
  Table as MuiTable,
  TableProps as MuiTableProps
} from "@mui/material";

type TableProps = MuiTableProps & {};

const Table: FC<TableProps> = (props) => {
  return <MuiTable {...props}>{props.children}</MuiTable>;
};

export default Table;
