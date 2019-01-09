import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {},
        };

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.password2,
        };

        try {
            const response = await axios.post('/api/users/register', newUser);
            console.log(response.data);
        } catch (error) {
            this.setState({ errors: error.response.data });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevConnector account</p>
                            <form noValidate onSubmit={this.onSubmit} autoComplete="off">
                                <div noValidate className="form-group">
                                    <input type="text"
                                        className={classNames("form-control form-control-lg", {
                                            'is-invalid': errors.name
                                        })}
                                        placeholder="Name" name="name" value={this.state.name}
                                        onChange={this.onChange} />
                                    <div className="invalid-feedback">
                                        Please enter name.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email"
                                        className={classNames("form-control form-control-lg", {
                                            'is-invalid': errors.email
                                        })}
                                        placeholder="Email Address" name="email" value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                                    <div className="invalid-feedback">
                                        Please enter valid email address.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="password" className={classNames("form-control form-control-lg", {
                                        'is-invalid': errors.password
                                    })} placeholder="Password" name="password" value={this.state.password}
                                        onChange={this.onChange} />

                                    <div className="invalid-feedback">
                                        Please enter password.
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="password" className={classNames("form-control form-control-lg", {
                                        'is-invalid': errors.password2
                                    })} placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />

                                    <div className="invalid-feedback">
                                        Passwords must match.
                                    </div>
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
