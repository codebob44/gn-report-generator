import React from 'react';
import Header from '../components/Header';
import AddCustomer from '../components/AddCustomer';
import CustomerList from '../components/CustomerList';

const Home = () => {
  return (
    <div>
      <Header />
      <AddCustomer />
      <CustomerList />
    </div>
  )
}

export default Home;