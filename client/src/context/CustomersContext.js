import React, { useState, createContext } from "react";

export const CustomersContext = createContext();

export const CustomersContextProvider = (props) => {
  // customers array to store a list of all our customers we fetch from backend server
  // setCustomers function to update customers state
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null); 

  const addCustomers = (customer) => {
    setCustomers([...customers, customer]);
  };
  
  return (
    <CustomersContext.Provider 
      value={{
        customers: customers, 
        setCustomers: setCustomers, 
        addCustomers: addCustomers, 
        selectedCustomer: selectedCustomer, 
        setSelectedCustomer: setSelectedCustomer
      }}>
      {props.children}
    </CustomersContext.Provider>
  );
};