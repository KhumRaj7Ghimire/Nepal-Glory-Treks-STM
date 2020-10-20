import React from 'react'
import {TextField } from '@material-ui/core';
import './Input.css'

export default function Input({name, label, value, onChange, row}) {
    return (
        <TextField
        multiline
        rows={row}
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        error
        helperText = "Some Validation Error"
        ></TextField>
    )
}