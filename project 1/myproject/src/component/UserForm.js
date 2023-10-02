import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    // proceed to the next step
    nextStep = () => {
        //pulling step out of the state object  this is called object destructuirng
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // Go back to the prev Step
    prevStep = () => {
        const { step } = this.state
        this.setState({ step: step - 1 });
    }

    // Handle field Change

    inputHandler = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        // pulling step out of the state object  this is called object destructuirng
        const { step } = this.state;
        // pulling all this from the state
        const { lastname, firstname, email, occupation, city, bio } = this.state
        const values = { lastname, firstname, email, occupation, city, bio }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        inputHandler={this.inputHandler}
                        values={values}
                    />
                )
            case 2:
                return <h1>Form Personal Details</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1></h1>
        }
    }
}

export default UserForm
