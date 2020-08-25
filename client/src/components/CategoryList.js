import React from "react";
//import CulturalIssuesConditionCodes from "./CulturalIssuesConditionCodes";
import classes from './CategoryList.module.css';
import ConditionList from "./ConditionList";
//import GrassConditionCodes from "./GrassConditionCodes";
//import SoilConditionCodes from "./SoilConditionCodes";
import Monogram_Icon from '../images/Monogram_Icon.png';


const CategoryList = ( props ) => {
  let categories = props.selectedCustomer.conditionCategories.rows
  return (
    
    <div className="row mb-2">
    
      {categories
        .map((category) => {
        return (
          <div className="col-12" >
          <div className="card border-0">
            
              <h3 className="card-header bg-white border-0 pb-0 text-uppercase ml-3"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />{category.condctdesc.slice(2)}</h3> 
                
          <div className="col-12" key={category.condctdesc}>
        
          <div className="card-body pb-0 pt-0">
            
              <ConditionList  category={category.condctdesc} selectedCustomer={props.selectedCustomer}/>
            
          </div>
        </div>
        </div>
            
            </div>
          
              
        );
      })} 
       
    </div> 
   
    
    
  );
};

 export default CategoryList;

 {/*<div className={classes.CardBody}>         
 <div className="card border-0">
   <h3 className="card-header bg-white border-0 pb-0 text-uppercase"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />Grass Condition</h3> 
   
   <div className="card-body  pb-0 pt-0">
  
   <GrassConditionCodes conditioncodes={selectedCustomer.conditioncodes.rows} />
   </div>
 </div>
</div>*/}

 