import React from "react";
import classes from './YardConditions.module.css';


const YardConditionsConditionCodes = ({ conditioncodes }) => {
  return (
    <div className="row mb-2">
      {conditioncodes
        .filter((conditioncode) => {
          return conditioncode.condctdesc === '4. Yard Conditions'
        })
        .map((conditioncode) => {
        return (
          <div className="col-12" key={conditioncode.condcode}>
            <div className="card-body pb-2 pt-2" key={conditioncode.id}>
              <h6 className={classes.conditionText} >{conditioncode.cond_desc}</h6>
              <p className="card-text pl-3 ml-5 pb-0 pt-0" >{conditioncode.custdo}</p>
            </div>
          </div>

        );
      })}  
    </div> 
  );
};

 export default YardConditionsConditionCodes;

 