import React, { FC } from 'react'
import { TableContainer as MuiTableContainer, TableContainerProps as MuiTableContainerProps } from '@mui/material'

type TableContainerProps = MuiTableContainerProps & {}

const TableContainer: FC<TableContainerProps> = (props) => {
  return (
    <MuiTableContainer {...props} >
        {props.children}
    </MuiTableContainer>
  )
}

export default TableContainer