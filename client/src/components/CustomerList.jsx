import React, {useEffect, useContext} from 'react';
import CustomerFinder from '../apis/CustomerFinder';
import { CustomersContext } from '../context/CustomersContext';
import { useHistory } from 'react-router-dom';

const CustomerList = (props) => {
  const {customers, setCustomers} = useContext(CustomersContext);
  let history = useHistory();

  useEffect( () => {
    // ok for this function to return something but not useEffect directly
    const fetchData = async () => {
      try {
        const response = await CustomerFinder.get("/");
        //console.log("response: ", response);
        setCustomers(response.data.data.customer);
      } catch (error) {
        console.log(error);
      }
    };
   fetchData();
  },[ setCustomers ]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await CustomerFinder.delete(`/${id}`);
      console.log("response :", response);
      setCustomers(customers.filter( customer => {
        return customer.id !== id
      }));
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = async (e, customernumber) => {
    e.stopPropagation();
    history.push(`/customers/${customernumber}/update`);
    
  }

  const handleCustomerSelect = async (customernumber) => {
    history.push(`/customers/${customernumber}`);
 
  }

  const handlePdf = async (customernumber) => {
    history.push(`/customers/pdf/${customernumber}`);
 
  }

  return (
    <div className="list-group">
      <table className="table table-hover table-dark"> 
        <thead>
        <tr className="bg-primary">
            <th scope="col">
            <input type="checkbox" aria-label="Checkbox for following text input" />
            </th>
            <th scope="col">id</th>
            <th scope="col">Customer Number</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Street Number</th>
            <th scope="col">Street Name</th>
            <th scope="col">City</th>
            <th scope="col">Zip</th>
            
          </tr>
        </thead>
        <tbody>
          {customers && customers.map(customer => {
            return (
              <tr  key={customer.id}>
                <td><input type="checkbox" /></td>
                <td>{customer.id}</td>
                <td>{customer.customernumber}</td>
                <td>{customer.firstname}</td>
                <td>{customer.lastname}</td>
                <td>{customer.streetnumber}</td>
                <td>{customer.streetname}</td>
                <td>{customer.city}</td>
                <td>{customer.zipcode}</td>
                
                <td>
                  <button onClick={() => handlePdf(customer.customernumber)} className="button btn-warning">PDF</button>
                </td>
                <td>
                  <button onClick={() => handleCustomerSelect(customer.customernumber)} className="button btn-warning">View</button>
                </td>
                <td>
                  <button disabled onClick={(e) => handleUpdate(e, customer.id)} className="button btn-warning">Update</button>
                </td>
                {/*<td>
                  <button disabled onClick={(e) => handleDelete(e ,customer.id)} className="button btn-danger">Delete</button>
                </td>*/}
                
              </tr>
              );  
            })}
          
        </tbody>
      </table>
    </div>
  );

 };
      

export default CustomerList;
