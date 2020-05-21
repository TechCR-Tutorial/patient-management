import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './component/navbar';
import DailyManagement from './component/dailymanagement';
import UserAdd from './component/useradd';
import Report from './component/report';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={DailyManagement} />
        <Route path="/userAdd" component={UserAdd} />
        <Route path="/report" component={Report} />
        {/* <Route path="/userAdd/:phoneNo/:firstName/:lastName" component={UserAdd} /> */}
        {/* <Route path="/create" component={CreateExercise} /> */}
        {/* <Route path="/user" component={CreateUser} /> */}
      </div>
    </Router>
  );
}

export default App;
