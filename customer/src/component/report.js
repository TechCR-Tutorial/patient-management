import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import server from './server';


export default class Report extends Component {

    constructor(props) {
        super(props);

        //this.onChangeUsername = this.onChangeUsername.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        //console.log('test construce')
        this.state = {
            startDate: new Date(),
            toDate: new Date(),
            datePatients: []
        }

    }

    onChangeFromDate = (date) => {
        this.setState({ startDate: date })
    }

    onChangeToDate = (date) => {
        this.setState({ toDate: date })
    }

    searchReports = (e) => {
        const report = {
            startDate: this.state.startDate,
            endDate: this.state.toDate
        }
        console.log(report)
        server.reports(report)
            .then(response => {
                console.log(response)
                this.setState({datePatients: response.data})
            })
    }

    render() {
        return (
            <div>
                <br />
                <h3>Patient Report</h3>
                <br />
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label >{`From  Date `}</label>
                            <div> <DatePicker className="form-control" selected={this.state.startDate} onChange={this.onChangeFromDate} /> </div> 
                        </div>
                        <div className="form-group col-md-4">
                            <label >To Date</label>
                            <div><DatePicker className="form-control" selected={this.state.toDate} onChange={this.onChangeToDate} /> </div>
                        </div>
                    </div>

                </form>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <button className="btn btn-secondary" onClick={this.searchReports}> Search </button>
                    </div>
                </div>
                <br />

                <br />
                <div className="container">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.datePatients.map(
                                datePatient =>
                                    <tr key={datePatient.id}>
                                        <th scope="col"> {datePatient.date} </th>
                                        <th scope="col"> {datePatient.patient.phoneNo} </th>
                                        <th scope="col"> {datePatient.patient.firstName} </th>
                                        <th scope="col"> {datePatient.patient.lastName} </th>
                                        <th scope="col"> {datePatient.patient.address} </th>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
