import React, {useState} from 'react'
import { makeStyles} from '@material-ui/core';

export function useForm(initialFValues) {
    const [values, setValues] = useState(initialFValues)
    const handleInputChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }
    return {
        values,
        setValues,
        handleInputChange
    }
}

const useStyle = makeStyles(theme => (
    {
        root:{
            '& .MuiFormControl-root' :{
                width:'100%',
                margin: theme.spacing(1)
            },
        }
    }
)) 

export function Form(props) {
    const classes = useStyle();
    return (
        <form className={classes.root}>
            {props.children}
        </form>
    )
}
