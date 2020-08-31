import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import CustomerDetailPage from "./routes/CustomerDetailPage";
import Pdf from "./routes/Pdf";
import { CustomersContextProvider } from './context/CustomersContext';
 
//import classes from './App.css';


const App = () => {
  return (
    <CustomersContextProvider>
      <div className="" >
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/customers/:id/update"
              component={UpdatePage}
            />
            <Route
              exact
              path="/customers/:customernumber"
              component={CustomerDetailPage}
            />
            <Route
              exact
              path="/customers/pdf/:customernumber"
              component={Pdf}
            />
          </Switch>
        </Router>
      </div>
    </CustomersContextProvider>
  );
};

export default App; 