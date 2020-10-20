import { Box, Grid} from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import Button from '../Button/Button';
import {useForm, Form} from '../Form/Form';
import Controls from '../Form/Controls'

const initialFValues={
    id: 0,
    fullName:'',
    email:'',
    contact:'',
    country:'',
    address:'',
    message:'',
    numberOfPeoples:[],
    startDate: new Date(),
}
const getNumberOfPeople = () =>([
    { id: '1', people: '1'},
    { id: '2', people: '2'},
    { id: '3', people: '3'},
    { id: '4', people: '4'},
    { id: '5', people: '5'},
    { id: '6', people: '6'},
    { id: '7', people: '7'},
    { id: '8', people: '8'},
    { id: '9', people: '9'},
    { id: '10', people: '10'},
    { id: '11', people: '11'},
    { id: '12', people: '12'},
    { id: '13', people: '13'},
    { id: '14', people: '14'},
    { id: '15', people: '15'},
])

export default function BookingForm() {
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);
    return (
            <Form>
            <Grid container>
                <Grid item xs={12}>
                    <Controls.Input
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                    />
                    
                    <Controls.Input
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    />
                    <Controls.Input
                    name="contact"
                    label="Contact Number"
                    value={values.contact}
                    onChange={handleInputChange}
                    />
                    <Controls.Input
                    name="country"
                    label="Country Name"
                    value={values.country}
                    onChange={handleInputChange}
                    />
                    <Controls.DatePicker
                    name="startDate"
                    label="Date"
                    value={values.startDate}
                    onChange={handleInputChange}
                    />
                    <Controls.Select
                    name="numberOfPeoples"
                    label="Number of People"
                    value={values.numberOfPeoples}
                    onChange={handleInputChange}
                    options={getNumberOfPeople()}
                    />
                    <Box display="flex" justifyContent="center" mt={3}>
                    <Button
                        className='btns'
                        buttonStyle='btn--submit'
                        buttonSize='btn--large'
                        path='/'
                        >
                        Book Now <i className='fas fa-check-circle'></i>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            </Form>
    )
}
