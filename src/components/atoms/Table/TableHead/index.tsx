import React, { FC } from 'react'
import { TableHead as MuiTableHead, TableHeadProps as MuiTableHeadProps } from '@mui/material'

type TableHeadProps = MuiTableHeadProps & {}

const TableHead: FC<TableHeadProps> = (props) => {
  return <MuiTableHead {...props} >{props.children}</MuiTableHead>
}

export default TableHead