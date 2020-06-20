import React, { Component } from 'react';
import server from './server';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class UserAdd extends Component {

    constructor(props) {
        super(props);

        //this.onChangeUsername = this.onChangeUsername.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        //console.log('test construce')
        this.state = {
            id: 0,
            firstName: '',
            lastName: '',
            phoneNo: '',
            address: '',
            patients: [],
            addedStatus: false,
            date: ''
        }

    }

    validateState(search) {
        this.setState({ addedStatus: false })
        if ( this.state.firstName.length > 3 || this.state.lastName.length >= 3 
            || this.state.phoneNo.length >= 5 || this.state.address.length >= 3) {
            this.search()
        } else {
            this.setState({
                patients: [],
            })
        } 
    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        }, () => this.validateState(this.state.firstName.length > 3))
    }

    onChangeLasttName = (e) => {
        this.setState({
            lastName: e.target.value
        }, () => this.validateState(this.state.lastName.length > 3))
    }

    onChangePhoneNo = (e) => {
        this.setState({
            phoneNo: e.target.value
        }, () => this.validateState(this.state.phoneNo.length > 5))
    }

    onChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        }, () => this.validateState(this.state.address.length > 3))
    }

    onChangeDate = (date) => {
        this.setState({ date: date })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const patient = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNo: this.state.phoneNo,
            address: this.state.address
        }

        console.log(this.state.id)
        if (this.state.id === 0) {
            server.addPatient(patient)
            .then(response => {
                server.registerForDay(response.data.id, this.state.date)
                    .then(response => {
                        this.setState({ 
                            addedStatus: true,
                            id: 0
                         })
                    })
            })
        } else {
            server.registerForDay(this.state.id, this.state.date)
                    .then(response => {
                        this.setState({ 
                            id: 0,
                            addedStatus: true 
                        })
                    })
        }
    }

    selectForUpdate = (patient) => {
        this.setState({
            id: patient.id,
            firstName: patient.firstName,
            lastName: patient.lastName,
            phoneNo: patient.phoneNo,
            address: patient.address,
            patients: [],
            addedStatus: false
        })
    }

    clearState = () => {
        this.setState({
            id: 0,
            firstName: '',
            lastName: '',
            phoneNo: '',
            address: '',
            patients: [],
            addedStatus: false,
            date: ''
        })
    }

    search = () => {
        const patient = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNo: this.state.phoneNo,
            address: this.state.address
        }
        console.log(patient);
        server.searchPatients(patient)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        recordsFound: false,
                        patients: response.data
                    })
                } else {
                    this.setState({
                        recordsFound: true,
                        patients: []
                    })
                }
            })
    }

    render() {
        return (
            <div>
                <br />
                <h3>Register Past Patient</h3>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label >Phone Number</label>
                            <input type="text" pattern="\d*" maxLength="10" minLength="10" className="form-control"
                                placeholder="Phone Number" value={this.state.phoneNo} onChange={this.onChangePhoneNo} />
                        </div>
                        <div className="form-group col-md-4">
                            <label >First Name</label>
                            <input type="text" required className="form-control" placeholder="First Name" minLength="4"
                                value={this.state.firstName} onChange={this.onChangeFirstName} />
                        </div>
                        <div className="form-group col-md-4">
                            <label >Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" minLength="4"
                                value={this.state.lastName} onChange={this.onChangeLasttName} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label >Address</label>
                        <input type="text" required className="form-control" placeholder="Address" minLength="4"
                            value={this.state.address} onChange={this.onChangeAddress} />
                    </div>
                    <div className="form-group">
                        <label >Date </label>
                        <div><DatePicker required={true} className="form-control" selected={this.state.date} onChange={this.onChangeDate} /> </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <input type="submit" value="Register" className="btn  btn-secondary" />
                        </div>
                        <div className="form-group col-md-2">
                            <button className="btn btn-secondary"
                                            onClick={() => this.clearState()}> Clear </button>
                        </div>
                    </div>

                </form>
                {this.state.addedStatus && <div className="alert alert-success"> Patient Register Sucesfully </div>}

                <br />

                <br />
                <div className="container">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Phone No</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.patients.map(
                                patient =>
                                    <tr key={patient.id}>
                                        <th scope="col"> {patient.phoneNo} </th>
                                        <th scope="col"> {patient.firstName} </th>
                                        <th scope="col"> {patient.lastName} </th>
                                        <th scope="col"> {patient.address} </th>
                                        <th scope="col"> <button className="btn btn-secondary"
                                            onClick={() => this.selectForUpdate(patient)}> Select </button> </th>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        );
    }
}

