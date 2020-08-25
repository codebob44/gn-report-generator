import React, {useState, useContext} from 'react';
import CustomerFinder from "../apis/CustomerFinder";
import {CustomersContext} from "../context/CustomersContext";

const AddCustomer = () => {
    const {addCustomers} = useContext(CustomersContext);
    // TODO- udpate these 
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("File 3");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await CustomerFinder.post("/", {
          name: name,
          location: location,
          price_range: priceRange
        });
        console.log("response :", response);
        addCustomers(response.data.data.customer);
        
      } catch (error) {
        console.log(error);
        }
    }
  return (
    <div className="mb-4">
      <form action=""> 
        <div className="form-row">
          <div className="col">
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" className="form-control" 
              placeholder="file 1" 
            />
          </div>
          <div className="col">
            <input 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              type="text" 
              className="form-control" 
              placeholder="file 2"/>
          </div>
          <div className="col">
            <select 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)} 
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>File 3</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button disabled onClick={handleSubmit} className="btn btn-primary">Upload</button>
        </div>
      
      </form>
      
    </div>
  )
};

export default AddCustomer;
