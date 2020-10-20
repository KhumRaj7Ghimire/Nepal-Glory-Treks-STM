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
    numberOfDays:[],
    createdDate: new Date(),
}
const getNumberOfDays = () =>([
    { id: '1', day: '1'},
    { id: '2', day: '2'},
    { id: '3', day: '3'},
    { id: '4', day: '4'},
    { id: '5', day: '5'},
    { id: '6', day: '6'},
    { id: '7', day: '7'},
    { id: '8', day: '8'},
    { id: '9', day: '9'},
    { id: '10', day: '10'},
    { id: '11', day: '11'},
    { id: '12', day: '12'},
    { id: '13', day: '13'},
    { id: '14', day: '14'},
    { id: '15', day: '15'},
])

export default function ContactUsForm() {
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
                    <Controls.Input
                    name="address"
                    label="Address"
                    value={values.address}
                    onChange={handleInputChange}
                    />
                    <Controls.Input
                    multiline
                    row = {6}
                    name="message"
                    label="Your Message"
                    value={values.message}
                    onChange={handleInputChange}
                    />
                    <Controls.Select
                    name="numberOfDays"
                    label="Number of Days"
                    value={values.numberOfDays}
                    onChange={handleInputChange}
                    options={getNumberOfDays()}
                    />
                    <Box display="flex" justifyContent="center" mt={3}>
                    <Button
                        className='btns'
                        buttonStyle='btn--submit'
                        buttonSize='btn--large'
                        path='/'
                        >
                        Submit Now <i className='fas fa-envelope'></i>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            </Form>
    )
}
