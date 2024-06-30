import { TableBody as MuiTableBody, TableBodyProps as MuiTableBodyProps } from '@mui/material'
import React, { FC } from 'react'

type TableBodyProps = MuiTableBodyProps & {} 

const TableBodyA: FC<TableBodyProps> = (props) => {
  return <MuiTableBody {...props} >{props.children}</MuiTableBody>
}

export default TableBodyA