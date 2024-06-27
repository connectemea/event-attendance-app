import React, { FC } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type TextInputProps = Omit<TextFieldProps, 'variant'> & {}

export const TextInput: FC<TextInputProps> = (props) => {
    return (
        <TextField fullWidth  label="Outlined" variant="outlined" />
    )
}