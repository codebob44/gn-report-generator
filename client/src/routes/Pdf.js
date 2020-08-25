// import React, {useContext, useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import { CustomersContext } from '../context/CustomersContext';
// // import CustomerFinder from '../apis/CustomerFinder';
// import axios from 'axios';

// const Pdf = () => {
//   const {customernumber} = useParams();
//   const {selectedCustomer, setSelectedCustomer} = useContext(CustomersContext);
//   console.log("selectedCustomer :", selectedCustomer);
  
//   const getUsers = async () => {
//     const response = await axios.get(`http://localhost:4000/api/v1/customers/pdf/${customernumber}`);
//     console.log("response :", response);
//     console.log('creating pdf for customer number: ', customernumber);
//     // // setSelectedCustomer is not setting the response data to selectedCustomer ?????????????????????????????????????????????
//     // setSelectedCustomer(response.data.data);
//     // console.log("selectedCustomer :", selectedCustomer);
//     // // let conditioncodesArr = selectedCustomer.conditioncodes.rows;
//   };

//   useEffect(() => {
//     const fetchData =  () => {
//       try {
//         getUsers();
//       } catch (err) {
//         console.log(err);
//       }
//     };
    
//     fetchData();
//   }, []);
//   console.log("selectedCustomer :", selectedCustomer);

//   return (
//     <div>
//       <h1>PDF is rendering for customer number {customernumber}.</h1>
//     </div>
//   )
// }

// export default Pdf;