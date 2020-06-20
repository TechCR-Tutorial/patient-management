(this.webpackJsonpcustomer=this.webpackJsonpcustomer||[]).push([[0],{163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(35),l=a.n(s),o=(a(82),a(83),a(24)),c=a(6),m=a(14),i=a(15),d=a(20),u=a(19),h=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},"Patient Manager"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/",className:"nav-link"},"Day Manage")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/userAdd",className:"nav-link"},"User Manage")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(o.b,{to:"/report",className:"nav-link"},"Report Manager")))))}}]),a}(n.Component),N=a(21),p=a.n(N),E="http://localhost:8080/patients",f=new(function(){function e(){Object(m.a)(this,e)}return Object(i.a)(e,[{key:"searchPatients",value:function(e){var t=e.phoneNo?e.phoneNo:"*",a=e.firstName?e.firstName:"*",n=e.lastName?e.lastName:"*",r=e.address?e.address:"*",s="".concat(E,"/").concat(t,"/").concat(a,"/").concat(n,"/").concat(r);return console.log("Search URL ".concat(s)),p.a.get(s)}},{key:"addPatientAndRegisterForToday",value:function(e){var t="".concat(E,"/daily");return p.a.post(t,e)}},{key:"registerForToday",value:function(e){var t="".concat(E,"/daily/").concat(e);return p.a.get(t)}},{key:"registerForDay",value:function(e,t){var a="".concat(E,"/daily/").concat(e,"/").concat(t);return p.a.get(a)}},{key:"addPatient",value:function(e){var t="".concat(E);return p.a.post(t,e)}},{key:"reports",value:function(e){var t="".concat(E,"/reports");return p.a.post(t,e)}},{key:"deleteDayPatient",value:function(e){var t="".concat(E,"/reports/").concat(e);return p.a.delete(t)}}]),e}()),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).ADDED_AND_REGISTERD="Sucessfully added and registerd for today",n.REGISTERD="Sucessfully registerd for today",n.onChangeFirstName=function(e){n.setState({firstName:e.target.value},(function(){return n.validateState(n.state.firstName.length>3)}))},n.onChangeLasttName=function(e){n.setState({lastName:e.target.value},(function(){return n.validateState(n.state.lastName.length>=3)}))},n.onChangePhoneNo=function(e){n.setState({phoneNo:e.target.value},(function(){return n.validateState(n.state.phoneNo.length>=5)}))},n.onChangeAddress=function(e){n.setState({address:e.target.value},(function(){return n.validateState(n.state.address.length>=3)}))},n.markForToday=function(e){f.registerForToday(e).then((function(e){n.setState({message:n.REGISTERD}),n.clearFields()}))},n.search=function(){var e={firstName:n.state.firstName,lastName:n.state.lastName,phoneNo:n.state.phoneNo,address:n.state.address};console.log(e),f.searchPatients(e).then((function(e){e.data.length>0?n.setState({recordsFound:!1,patients:e.data}):n.setState({recordsFound:!0,patients:[]})}))},n.onSubmit=function(e){console.log("submiting..."),e.preventDefault();var t={firstName:n.state.firstName,lastName:n.state.lastName,phoneNo:n.state.phoneNo,address:n.state.address};f.addPatientAndRegisterForToday(t).then((function(e){n.setState({recordsFound:!1,message:n.ADDED_AND_REGISTERD}),n.clearFields()}))},n.clearFields=function(){n.setState({firstName:"",lastName:"",address:"",phoneNo:""})},n.state={firstName:"",lastName:"",phoneNo:"",address:"",recordsFound:!1,patients:[],message:""},n}return Object(i.a)(a,[{key:"validateState",value:function(e){this.setState({message:""}),(e||this.state.firstName.length>3||this.state.lastName.length>=3||this.state.phoneNo.length>=5||this.state.address.length>=3)&&this.search()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h3",null,"Register Patient"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{type:"number",pattern:"[0-9]+",maxLength:"10",minLength:"10",className:"form-control",placeholder:"Phone Number",value:this.state.phoneNo,onChange:this.onChangePhoneNo})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"First Name",minLength:"4",value:this.state.firstName,onChange:this.onChangeFirstName})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last Name",minLength:"4",value:this.state.lastName,onChange:this.onChangeLasttName}))),r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Address"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Address",minLength:"4",value:this.state.address,onChange:this.onChangeAddress})),this.state.recordsFound&&r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-2"},r.a.createElement("input",{type:"submit",value:"Register And Mark",className:"btn  btn-secondary"})))),this.state.message&&r.a.createElement("div",{className:"alert alert-success"}," ",this.state.message)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Phone No"),r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,this.state.patients.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",{scope:"col"}," ",t.phoneNo," "),r.a.createElement("th",{scope:"col"}," ",t.firstName," "),r.a.createElement("th",{scope:"col"}," ",t.lastName," "),r.a.createElement("th",{scope:"col"}," ",t.address," "),r.a.createElement("th",{scope:"col"}," ",r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.markForToday(t.id)}}," Mark ")))}))))))}}]),a}(n.Component),v=a(34),b=a.n(v),y=(a(66),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChangeFirstName=function(e){n.setState({firstName:e.target.value},(function(){return n.validateState(n.state.firstName.length>3)}))},n.onChangeLasttName=function(e){n.setState({lastName:e.target.value},(function(){return n.validateState(n.state.lastName.length>3)}))},n.onChangePhoneNo=function(e){n.setState({phoneNo:e.target.value},(function(){return n.validateState(n.state.phoneNo.length>5)}))},n.onChangeAddress=function(e){n.setState({address:e.target.value},(function(){return n.validateState(n.state.address.length>3)}))},n.onChangeDate=function(e){n.setState({date:e})},n.onSubmit=function(e){e.preventDefault();var t={firstName:n.state.firstName,lastName:n.state.lastName,phoneNo:n.state.phoneNo,address:n.state.address};console.log(n.state.id),0===n.state.id?f.addPatient(t).then((function(e){f.registerForDay(e.data.id,n.state.date).then((function(e){n.setState({addedStatus:!0,id:0})}))})):f.registerForDay(n.state.id,n.state.date).then((function(e){n.setState({id:0,addedStatus:!0})}))},n.selectForUpdate=function(e){n.setState({id:e.id,firstName:e.firstName,lastName:e.lastName,phoneNo:e.phoneNo,address:e.address,patients:[],addedStatus:!1})},n.clearState=function(){n.setState({id:0,firstName:"",lastName:"",phoneNo:"",address:"",patients:[],addedStatus:!1,date:""})},n.search=function(){var e={firstName:n.state.firstName,lastName:n.state.lastName,phoneNo:n.state.phoneNo,address:n.state.address};console.log(e),f.searchPatients(e).then((function(e){e.data.length>0?n.setState({recordsFound:!1,patients:e.data}):n.setState({recordsFound:!0,patients:[]})}))},n.state={id:0,firstName:"",lastName:"",phoneNo:"",address:"",patients:[],addedStatus:!1,date:""},n}return Object(i.a)(a,[{key:"validateState",value:function(e){this.setState({addedStatus:!1}),(e||this.state.firstName.length>3||this.state.lastName.length>=3||this.state.phoneNo.length>=5||this.state.address.length>=3)&&this.search()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h3",null,"Register Past Patient"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{type:"text",pattern:"\\d*",maxLength:"10",minLength:"10",className:"form-control",placeholder:"Phone Number",value:this.state.phoneNo,onChange:this.onChangePhoneNo})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"First Name",minLength:"4",value:this.state.firstName,onChange:this.onChangeFirstName})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last Name",minLength:"4",value:this.state.lastName,onChange:this.onChangeLasttName}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Address"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Address",minLength:"4",value:this.state.address,onChange:this.onChangeAddress})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date "),r.a.createElement("div",null,r.a.createElement(b.a,{required:!0,className:"form-control",selected:this.state.date,onChange:this.onChangeDate})," ")),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-2"},r.a.createElement("input",{type:"submit",value:"Register",className:"btn  btn-secondary"})),r.a.createElement("div",{className:"form-group col-md-2"},r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.clearState()}}," Clear ")))),this.state.addedStatus&&r.a.createElement("div",{className:"alert alert-success"}," Patient Register Sucesfully "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Phone No"),r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,this.state.patients.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",{scope:"col"}," ",t.phoneNo," "),r.a.createElement("th",{scope:"col"}," ",t.firstName," "),r.a.createElement("th",{scope:"col"}," ",t.lastName," "),r.a.createElement("th",{scope:"col"}," ",t.address," "),r.a.createElement("th",{scope:"col"}," ",r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.selectForUpdate(t)}}," Select ")," "))}))))))}}]),a}(n.Component)),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChangeFromDate=function(e){n.setState({startDate:e})},n.onChangeToDate=function(e){n.setState({toDate:e})},n.searchReports=function(e){var t={startDate:n.state.startDate,endDate:n.state.toDate};console.log(t),f.reports(t).then((function(e){console.log(e),n.setState({datePatients:e.data})}))},n.deleteEntry=function(e){f.deleteDayPatient(e).then((function(t){console.log("record deleted ".concat(e)),n.searchReports()}))},n.state={startDate:new Date,toDate:new Date,datePatients:[]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h3",null,"Patient Report"),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"From  Date "),r.a.createElement("div",null," ",r.a.createElement(b.a,{className:"form-control",selected:this.state.startDate,onChange:this.onChangeFromDate})," ")),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",null,"To Date"),r.a.createElement("div",null,r.a.createElement(b.a,{className:"form-control",selected:this.state.toDate,onChange:this.onChangeToDate})," ")))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-2"},r.a.createElement("button",{className:"btn btn-secondary",onClick:this.searchReports}," Search "))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Phone No"),r.a.createElement("th",{scope:"col"},"First Name"),r.a.createElement("th",{scope:"col"},"Last Name"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,this.state.datePatients.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",{scope:"col"}," ",t.date," "),r.a.createElement("th",{scope:"col"}," ",t.patient.phoneNo," "),r.a.createElement("th",{scope:"col"}," ",t.patient.firstName," "),r.a.createElement("th",{scope:"col"}," ",t.patient.lastName," "),r.a.createElement("th",{scope:"col"}," ",t.patient.address," "),r.a.createElement("th",{scope:"col"}," ",r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.deleteEntry(t.id)}}," Delete ")))}))))))}}]),a}(n.Component);var C=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement(c.a,{path:"/",exact:!0,component:g}),r.a.createElement(c.a,{path:"/userAdd",component:y}),r.a.createElement(c.a,{path:"/report",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a(163)},82:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.1db8de7d.chunk.js.map