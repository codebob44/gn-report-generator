import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import CustomerDetailPage from "./routes/CustomerDetailPage";
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
          </Switch>
        </Router>
      </div>
    </CustomersContextProvider>
  );
};

export default App; 