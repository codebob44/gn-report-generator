import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { CustomersContext } from '../context/CustomersContext';
// import CustomerFinder from '../apis/CustomerFinder';
import axios from 'axios';
//import StarRating from "../components/StarRating";
import GrassConditionCodes from "../components/GrassConditionCodes";
import SoilConditionCodes from "../components/SoilConditionCodes";
import CulturalIssuesConditionCodes from "../components/CulturalIssuesConditionCodes";
import YardConditionsConditionCodes from "../components/YardConditionsConditionCodes";
import PerrenialWeedsConditionCodes from "../components/PerrenialWeedsConditionCodes";
import AnnualWeedsConditionCodes from "../components/AnnualWeedsConditionCodes";
import DiseasesConditionCodes from "../components/DiseasesConditionCodes";
import PestsConditionCodes from "../components/PestsConditionCodes";
import RecommendationsConditionCodes from "../components/RecommendationsConditionCodes";
//import CategoryList from "../components/CategoryList";
//import ConditionList from "../components/ConditionList";
//import CategoriesAndConditions from "../components/CategoriesAndConditions";




//import AddReview from "../components/AddReview";
import classes from './CustomerDetailPage.module.css';
// import Front_Header  from '../images/Front_Header.jpg';
import Front_Header5 from '../images/Front_Header5.jpg';
//import Cards_Beautiful_Lawn from '../images/Cards_Beautiful_Lawn.jpg';
// import Cards_Beautiful_Lawn3 from '../images/Cards_Beautiful_Lawn3.jpg';
import Cards_Beauitufl_Lawn_Large from '../images/Cards_Beauitufl_Lawn_Large.jpg';

// import Alec_Circle from '../images/Alec_Circle.png';
// import Front_Footer2 from '../images/Front_Footer2.png';
import Front_Title from '../images/Front_Title.jpg';
// import Front_Address_Panel_Header from '../images/Front_Address_Panel_Header.png';
// import Front_Coupon from '../images/Front_Coupon.jpg';
// import Front_Coupon3 from '../images/Front_Coupon3.jpg';
import Front_Coupon4 from '../images/Front_Coupon4.jpg';
import Monogram_Icon from '../images/Monogram_Icon.png';
import Back_Header_generic from '../images/Back_Header_generic.jpg';
import Back_Your_Lawn_Summary from "../images/Back_Your_Lawn_Summary.jpg";

const CustomerDetailPage = () => {
  const {customernumber} = useParams();
  const {selectedCustomer, setSelectedCustomer} = useContext(CustomersContext);
  console.log("selectedCustomer :", selectedCustomer);
  
  const getUsers = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/customers/${customernumber}`);
    console.log("response :", response);
    // setSelectedCustomer is not setting the response data to selectedCustomer ?????????????????????????????????????????????
    setSelectedCustomer(response.data.data);
    console.log("selectedCustomer :", selectedCustomer);
    // let conditioncodesArr = selectedCustomer.conditioncodes.rows;
  };

  useEffect(() => {
    const fetchData =  () => {
      try {
        getUsers();
      } catch (err) {
        console.log(err);
      }
    };
    
    fetchData();
  }, []);
  console.log("selectedCustomer :", selectedCustomer);

  


  return (
    <div>
      {selectedCustomer &&  (
        <>
        <main role="main" >
        
      
      <div className="">
        <img src={Front_Header5} className="img-fluid mb-2" alt="header"></img>
        <img src={Front_Title} className="img-fluid mt-2 mb-2" alt="title slice"></img>
        <p  className="text-center mb-2 pb-0">Thank you for choosing Good Nature, the healthier choice for your lawn, family and our<br/>environment.  To have a healthy lawn you need 3 things: healthy soil, good grass varieties<br/> and good cultural practices (mowing, watering, and feeding).  Below is our evaluation of<br/> your current lawn conditions. Let's connect soon to discuss wht we noticed and make<br/> sure we're providing you with the right services to meet your expectations.<br/></p>
       <div className="row ml-3">
        <div className="col-12 ml-5">
        
        <img src={Cards_Beauitufl_Lawn_Large} className="img-fluid mb-2 mt-2 w-75 ml-5" alt="cards"></img>
        </div>
       </div>
       

        {/*---Alec Image & paragraph---*/}
        <div className="row ">


        {/*---Alec Image and Paragraph---*/}
        <div className="row">
        <div className="col pl-5">
          <div className="card-body border-0 pb-0 pt-0">
            <div className={classes.alecImage2}> 
            <div className={classes.alecText}>
            <p className={classes.alecText}>
            Going Organic does require a slightly different mindset and<br/> approach.  Rather than treating symptoms (killing everything<br/> with chemicals as traditional lawncare companies do), we<br/> work to understand the root cause of any issue that might<br /> bother you, and then fix the real problem.<br/><br/> Over the next few pages, you'll find information about what<br/> we've noticed in your lawn.  We'll use this information to<br/> formulate a plan that will gradually improve your lawn and<br/> landscape, without constant chemical treatments. We'll be in<br/> touch to discuss the next steps towards achieving a beautiful<br/> yard.  Thanks again for going organic with Good Nature!
            </p>
            <p className={classes.alecSignature}>Alec McClennan</p>
            <p className={classes.alecTitle}><small className="text-bold">  GOOD NATURE FOUNDER</small></p>
            
            </div>
            
            </div>         
          </div>
          </div>


        </div>
        

        </div>
          
        {/*--Cutout Section --*/}
        <div className="row justify-content-around align-bottom">
          <div className="col-12">
          <div className="card border-0">
            <div className="card-header bg-white border-0 mb-0 mt-0 pb-0 pt-0">
              <h5 className="text-center bg-white border-0 mb-0 mt-1 pb-0 pt-0">----------------------------------------------------------------------------------------------------------------------------------------------------------------------</h5>
            </div>
            <div className="card-header bg-white border-0 mb-0 mt-0 pb-0 pt-0">
              <div className={classes.gnWrapper}>
                <h1 className="text-center bg-white border-0 mb-0 mt-2 pb-0 pt-0">GOOD NATURE ORGANIC LAWN CARE EVALUATION</h1>
              </div>
              
            </div>
            <div className="card-header  bg-white border-0 mb-3 pt-0 mt-1 pb-0">
              <div className={classes.gnCustomerWrapper}>
              {/*<p className={classes.customizedFor}>Customized For {selectedCustomer.customer[0].firstname}</p>*/}
                  {/*<h2 className="text-center bg-white border-0 mb-0 pb-0"> Customized For {selectedCustomer.customer[0].firstname} </h2>*/}
              </div>
              
            </div>
            {/*---Address and Coupon Row---*/}
            <div className="row align-items-end justify-content-around">
              {/*---Address---*/}
              <div className="col-sm-5">
              <div className="card border-0 mb-0">
                <div className="row no-gutters align-items-end">
                    <div className="col pl-5">
                      <div className="card-body border-0 pb-0 align-bottom">
                        <div className={classes.addressIcon}> 
                          <h6 className="mt-0 mb-0 pt-0 pl-5 ml-5"> {selectedCustomer.customer[0].firstname} {selectedCustomer.customer[0].lastname}</h6>
                          <h6 className="mb-0 pl-5 ml-5">{selectedCustomer.customer[0].streetnumberandname}</h6>
                          <h6 className="mb-0 pb-0 pl-5 ml-5">{selectedCustomer.customer[0].city}, {selectedCustomer.customer[0].state}, {selectedCustomer.customer[0].zipcode}</h6>
                        </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              {/*---Coupon---*/}
              <div className="col-sm-6 mb-0 pb-0">
                <div className="card border-0 pb-0">
                  <div className="card-body  pb-0 pt-0 pl-0 ml-5"> 
                  <img src={Front_Coupon4} className="img-fluid  mb-0 pt-0 pb-0 ml-4 " alt="coupon"></img>
                  </div>
                </div>
              </div>
              {/*---Page 1 Footer---*/}
              {/*<img src={Front_Footer2} className="img-fluid mb-0 mt-1 pt-1" alt="Responsive "></img>*/}
              </div> 
            
        </div>


        </div>


           
      </div>
          
      {/*---Page 2 Header---*/}
      <img src={Back_Header_generic} className="img-fluid mb-3" alt="back header"></img>


      {/*---Condition Category Sections---*/}
              
    
      
      {/*<CategoryList categories={selectedCustomer.conditionCategories.rows} selectedCustomer={selectedCustomer} />*/}
      
    
      
        
      
      {/*---Condition Category Sections---*/}
       <div className={classes.CardBody}>         
    <div className="card border-0">
      <h3 className="card-header bg-white border-0 pb-0 text-uppercase"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />Grass Condition</h3> 
      
      <div className="card-body  pb-0 pt-0">
      
      <GrassConditionCodes conditioncodes={selectedCustomer.conditioncodes.rows} />
      </div>
    </div>
    </div>

    <div className={classes.CardBody}>
    <div className="card border-0 pb-0">
    <h3 className="card-header bg-white border-0 pb-0 text-uppercase"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />Soil Quality</h3>

    <div className="card-body pb-0 pt-0">
    <SoilConditionCodes conditioncodes={selectedCustomer.conditioncodes.rows} />
    </div>
  </div>
    </div>
    

    <div className={classes.CardBody}>
    <div className="card border-0 pb-0">
    <h3 className="card-header bg-white border-0 pb-0 text-uppercase"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />Cultural Issues</h3>

    <div className="card-body pb-0 pt-0">  
    <CulturalIssuesConditionCodes conditioncodes={selectedCustomer.conditioncodes.rows} />
    </div>
  </div>
    </div>
    
    <div className={classes.CardBody}>
    <div className="card border-0 pb-0">
    <h3 className="card-header bg-white border-0 pb-0 text-uppercase"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />Yard Conditions</h3>
    
    <div className="card-body pb-0 pt-0">
    <YardConditionsConditionCodes conditioncodes={selectedCustomer.conditioncodes.rows} />
    </div>
      
  </div>
    </div>
    

    <div className={classes.CardBody}>
    <div className="card border-0 pb-0">
    <h3 className="card-header bg-white border-0 pb-0 text-uppercase"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />Perrenial Weeds</h3>
    <div className="card-body pb-0 pt-0">
    <PerrenialWeedsConditionCodes conditioncodes={selectedCustomer.conditioncodes.rows} />
    </div>
  </div>
    </div>

   

    <div className={classes.CardBody}>
    <div className="card border-0 pb-0">
    <h3 className="card-header bg-white border-0 pb-0 text-uppercase"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />Annual Weeds</h3>

    <div className="card-body pb-0 pt-0">
    <AnnualWeedsConditionCodes conditioncodes={selectedCustomer.conditioncodes.rows} />
    </div>
  </div>
    </div>
  

    <div className={classes.CardBody}>
    <div className="card border-0 pb-0">
    <h3 className="card-header bg-white border-0 pb-0 text-uppercase"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />Diseases</h3>

    <div className="card-body pb-0 pt-0">
    <DiseasesConditionCodes conditioncodes={selectedCustomer.conditioncodes.rows} />
    </div>
  </div>
    </div>
 

  <div className={classes.CardBody}>
  <div className="card border-0 pb-0">
  <h3 className="card-header bg-white border-0 pb-0 text-uppercase"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />Pests</h3>

  <div className="card-body pb-0 pt-0">
  <PestsConditionCodes conditioncodes={selectedCustomer.conditioncodes.rows} />
  </div>
</div>
  </div>


<div className={classes.CardBody}>
<div className="card border-0 pb-0">
<h3 className="card-header bg-white border-0 pb-0 text-uppercase"><img src={Monogram_Icon} className={classes.ConditionCategoryIcon} alt="..." />Recommendations</h3>
<div className="card-body pb-0 pt-0">
  <RecommendationsConditionCodes conditioncodes={selectedCustomer.conditioncodes.rows} />
</div>
</div>
    </div>


    <div className={classes.CardBody}>
      {/*---Your Lawn Summary---*/}
    <img src={Back_Your_Lawn_Summary} className="img-fluid mb-1" alt="summary slice"></img>
    <div className="card-body pb-0 pt-0 ml-5">
          <p className="card-text pl-2 pr-5 ml-4 pb-2 pt-2"> {selectedCustomer.customer[0].feedback}</p>
        </div>
    </div>
    
   </div> {/*<!-- /container -->*/}
          
 </main>
        </>
      )}
    </div>
  );
};

export default CustomerDetailPage;
