import { TableCell as MuiTableCell, TableCellProps as MuiTableCellProps } from '@mui/material'
import React, { FC } from 'react'

type TableCellProps = MuiTableCellProps & {}

const TableCell: FC<TableCellProps> = (props) => {
return <MuiTableCell {...props}>{props.children}</MuiTableCell>
}

export default TableCell