import React, { Component } from 'react';
import Server from './server'

export default class DailyManagement extends Component {

    ADDED_AND_REGISTERD = "Sucessfully added and registerd for today"
    REGISTERD = "Sucessfully registerd for today"

    constructor(props) {
        super(props);

        //this.onChangeUsername = this.onChangeUsername.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNo: '',
            address: '',
            recordsFound: false,
            patients: [],
            message: ''
        }
    }

    validateState(search) {
        this.setState({message: ''})
        if (search) {
            this.search()
        } else {
            this.setState({ patients: [] })
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
        }, () => this.validateState(this.state.lastName.length >= 3))
    }

    onChangePhoneNo = (e) => {
        this.setState({
            phoneNo: e.target.value
        }, () => this.validateState(this.state.phoneNo.length >= 5))
    }

    onChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    markForToday = (patientId) => {
        Server.registerForToday(patientId)
            .then(response => {
                this.setState({message : this.REGISTERD})
                this.clearFields()
            })
    }

    search = () => {
        const patient = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNo: this.state.phoneNo
        }
        console.log(patient);
        Server.searchPatients(patient)
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


    onSubmit = (event) => {
        console.log("submiting...")
        event.preventDefault();
        const patient = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNo: this.state.phoneNo,
            address: this.state.address
        }
        Server.addPatientAndRegisterForToday(patient)
            .then(response => {
                this.setState({ 
                    recordsFound: false,
                    message: this.ADDED_AND_REGISTERD
                 })
                 this.clearFields()
            })
    }

    clearFields = () => {
        this.setState( {
            firstName: '',
            lastName: '',
            address: '',
            phoneNo: ''
        })
    }
    render() {

        return (
            <div>
                <br />
                <h3>Find Pation</h3>
                <br />
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label >Phone Number</label>
                            <input type="text" pattern="\d*" maxLength="10" minLength="10" required className="form-control"
                                placeholder="Phone Number" value={this.state.phoneNo} onChange={this.onChangePhoneNo} />
                        </div>
                        <div className="form-group col-md-4">
                            <label >First Name</label>
                            <input type="text" required className="form-control" placeholder="First Name" minLength="4"
                                value={this.state.firstName} onChange={this.onChangeFirstName} />
                        </div>
                        <div className="form-group col-md-4">
                            <label >Last Name</label>
                            <input type="text" required className="form-control" placeholder="Last Name" minLength="4"
                                value={this.state.lastName} onChange={this.onChangeLasttName} />
                        </div>
                    </div>
                    {this.state.recordsFound &&
                        <div><div className="form-group">
                            <label >Address</label>
                            <input type="text" required className="form-control" placeholder="Address" minLength="4"
                                value={this.state.address} onChange={this.onChangeAddress} />
                        </div>
                            <div className="form-row">
                                <div className="form-group col-md-2">
                                    <input type="submit" value="Register And Mark" className="btn  btn-secondary" />
                                </div>
                            </div>

                        </div>

                    }
                    {this.state.message && <div className="alert alert-success"> {this.state.message}</div> }

                </form>
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
                                            onClick={() => this.markForToday(patient.id)}> Mark </button> </th>
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