import React, { Component } from 'react';
import MuithemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './FormPersonalDetails.module.css';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, inputHandler } = this.props;
        return (
            <MuithemeProvider>
                <React.Fragment>
                    <AppBar title='Enter User Details' />
                    <TextField
                        hintText='Enter your First Name'
                        floatingLabelText='First Name'
                        onChange={inputHandler('firstname')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        hintText='Enter your Last Name'
                        floatingLabelText='Last Name'
                        onChange={inputHandler('lastname')}
                        defaultValue={values.lastname}
                    />
                    <br />
                    <TextField
                        hintText='Enter your email'
                        floatingLabelText='Email'
                        onChange={inputHandler('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                    />
                </React.Fragment>
            </MuithemeProvider>
        )
    }
}

export default FormUserDetails;
