import React, { FC } from 'react'
import { TableRow as MuiTableRow, TableRowProps as MuiTableRowProps } from '@mui/material'

type TableRowProps = MuiTableRowProps & {}

const TableRow: FC<TableRowProps> = (props) => {
  return <MuiTableRow {...props}>{props.children}</MuiTableRow>
}

export default TableRow