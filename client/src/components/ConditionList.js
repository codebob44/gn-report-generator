import React from "react";
//import CulturalIssuesConditionCodes from "./CulturalIssuesConditionCodes";
import classes from './ConditionList.module.css';


const ConditionList = (props) => {
  let conditioncodes = props.selectedCustomer.conditioncodes.rows;
  const category = props.category;
  return (
    <div className={classes.CardBody}>
    <div className="row mb-2">
    
      {conditioncodes
        .filter((conditioncode, index, arr) => {
          return conditioncode.condctdesc === category
        })
        .map((conditioncode) => {
        return (
          
          <div className="col-12" key={conditioncode.condcode}>
         
          
          <div className="card-body pb-2 pt-2" key={conditioncode.condcode}>
          
          <h6 className={classes.conditionText} >{conditioncode.cond_desc}</h6>
          
            <p className="card-text pl-3 ml-5 pb-0 pt-0" >{conditioncode.custdo}</p>
            </div>
        </div>
            
           
           
            
        
        
        );
      }) }  
    </div> 
    </div>
    
  );
};

 export default ConditionList;



 