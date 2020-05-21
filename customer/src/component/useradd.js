import React, { Component } from 'react';
import server from './server';

export default class UserAdd extends Component {

    constructor(props) {
        super(props);

        //this.onChangeUsername = this.onChangeUsername.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        //console.log('test construce')
        this.state = {
            firstName: '',
            lastName: '',
            phoneNo: '',
            address: '',
            addedStatus: false
        }

    }

    validateState() {
        this.setState({ addedStatus: false })
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        }, () => this.validateState())
    }

    onChangeLasttName = (e) => {
        this.setState({
            lastName: e.target.value
        }, () => this.validateState())
    }

    onChangePhoneNo = (e) => {
        this.setState({
            phoneNo: e.target.value
        }, () => this.validateState())
    }

    onChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        }, () => this.validateState())
    }

    onSubmit = (event) => {
        event.preventDefault();
        const patient = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNo: this.state.phoneNo,
            address: this.state.address
        }
        server.addPatient(patient)
            .then(response => {
                this.setState({ addedStatus: true })
            })
    }

    render() {
        return (
            <div>
                <br />
                <h3>Register New Pation</h3>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >First Name</label>
                            <input type="text" required className="form-control" placeholder="First Name" minLength="4"
                                value={this.state.firstName} onChange={this.onChangeFirstName} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Last Name</label>
                            <input type="text" required className="form-control" placeholder="Last Name" minLength="4"
                                value={this.state.lastName} onChange={this.onChangeLasttName} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Phone Number</label>
                            <input type="text" pattern="\d*" maxLength="10" minLength="10" required className="form-control"
                                placeholder="Phone Number" value={this.state.phoneNo} onChange={this.onChangePhoneNo} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label >Address</label>
                        <input type="text" required className="form-control" placeholder="Address" minLength="4"
                            value={this.state.address} onChange={this.onChangeAddress} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <input type="submit" value="Register" className="btn  btn-secondary" />
                        </div>
                    </div>

                </form>
                { this.state.addedStatus &&  <div className="alert alert-success"> Patient Register Sucesfully </div> }
            </div>

            
        );
    }
}

