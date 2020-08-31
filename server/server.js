require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// we only need one ./ compared to the documentation example
const db = require("./db/index.js");
const puppeteer = require('puppeteer');
const path = require('path');
//const pdf = require('../client/scripts/generate-pdf.js');

const app = express();

// morgan middleware
app.use(morgan("dev"));

app.use(cors());

app.use(express.json());


// module.exports = async function pdf(url, req) {
//   const filename = `/public/pdfs/LawnSummary-${req.params.customernumber}.pdf`;
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto('http://localhost:3000/customers/'+req.params.customernumber, {waitUntil: 'networkidle2'});
//   await page.pdf({path: filename, format: 'A4', landscape: true, printBackground: true});

//   await browser.close();
//   return filename;
// }


// GET ALL CUSTOMERS from customer_notes or condcodes
app.get('/api/v1/customers', async (req, res) => {
    try {
      const results = await db.query("select * from customer_notes ORDER BY customernumber");
      // const results = await db.query("select * from customer_notes");
      //const results = await db.query("select * from customer_condcodes where customernumber = 2111");
      //const results = await db.query("select conditioncode from customer_condcodes where customernumber=2111")
      //const results = await db.query("select customernumber, customername from customer_condcodes where customernumber<1000000 group by customernumber, customername order by customernumber");
      console.log("results :", results.rows);
      console.log("get all customers_notes");

      // let customer_condcodes = [];
      // for (let i=0; i < results.rows.length; i++){
      //   console.log(results.rows[i].conditioncodeanddescription);
      //   customer_condcodes.push([results.rows[i].conditioncodeanddescription]);
      // }
      //return customer_condcodes
      res.status(200).json({
        status: "success",
        CurrentCustomerRows: results.rows.length,

        data: {
          customer: results.rows,
          // customer_condcodes_length: customer_condcodes.length,
          // customer_condcodes: customer_condcodes
        }
      });
    } catch (error) {
          console.log(error);
        }
    
    // try {
    //   const results = await db.query("select * from customers_condcodes");

    //   console.log('results :', results);
    //   res.status(200).json({
    //     status: "success",
    //     // results: results.rows.length,
    //     // data: { 
    //     //   restaurants: results.rows,
    //     // },
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  
});



 
 




// const createPDF = async function () {
//     try {
//       console.log("running puppeteer now...");
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         await page.goto(`http://localhost:3000/customers/${req.params.customernumber}`, {waitUntil: 'networkidle2'});
//         await page.emulateMediaType('screen');
//         await page.pdf({
//           path: `./${req.params.customernumber}react.pdf`, // path (relative to CWD) to save the PDF to
//           printBackground: true, // print background colors
//           format: 'Legal'
//         });
//         await browser.close();
    
//       }
//         catch (error) {
//           console.log(error);
//         }
        
//    };

// app.get('/api/v1/customers/:customernumber', async (req, resp) => {
//   const url = req.query.url;
//   if (!url) {
//       resp.send('Url is required');
//       return;
//   }

//   try {
//       const browser = await puppeteer.launch();
//       const page = await browser.newPage();
//       await page.goto(url);
//       // Get the "viewport" of the page, as reported by the page.
//       const dimensions = await page.evaluate(() => {
//           return {
//               width: document.documentElement.clientWidth,
//               height: document.documentElement.clientHeight,
//               deviceScaleFactor: window.devicePixelRatio
//           };
//       });
//       await browser.close();
//       resp.send(dimensions);
//   } catch (e) {
//       resp.send(e.message);
//   }
// });


// get one restaurant by id
app.get('/api/v1/customers/:customernumber', async (req, res) => {
  // const createPDF = async function () {
  //   try {
  //     console.log("running puppeteer now...");
  //       const browser = await puppeteer.launch();
  //       const page = await browser.newPage();
  //       await page.goto(`http://localhost:3000/customers/${req.params.customernumber}`, {waitUntil: 'networkidle2'});
  //       await page.emulateMediaType('screen');
  //       await page.pdf({
  //         path: `./scripts/${req.params.customernumber}react.pdf`, // path (relative to CWD) to save the PDF to
  //         printBackground: true, // print background colors
  //         format: 'Legal'
  //       });
  //       await browser.close();
        
    
  //     }
  //       catch (error) {
  //         console.log(error);
  //       }
        
  //  };
  //  createPDF();

  
  
  


  console.log("getting customer info and condition codes");
  try {
    const customer = await db.query("select * from customer_notes where customernumber = $1", [req.params.customernumber]);
    
    const conditionCategories = await db.query("SELECT  cci.condctdesc FROM customer_condcodes cc LEFT JOIN condcodes_info cci ON cc.ConditionCode = cci.CONDCODE WHERE customernumber = $1 GROUP BY cci.condctdesc ORDER BY cci.condctdesc;", [req.params.customernumber]);
    
    const conditioncodes = await db.query("SELECT cc.CustomerNumber,cci.CONDCTDESC,cc.ConditionCode,cci.CONDCODE,cci.COND_DESC, cci.CONDCATID, cci.CUSTDO FROM customer_condcodes cc LEFT JOIN condcodes_info cci ON cc.ConditionCode = cci.CONDCODE WHERE customernumber = $1 ORDER BY cc.CustomerNumber,cci.CONDCTDESC,DESC_SORT_NUMBER;", [req.params.customernumber]);
    
    console.log(req.params);
   
    res.status(200).json({
      status: "success",
      data: {
        customer: customer.rows,
        conditioncodes: conditioncodes,
        conditionCategories: conditionCategories
      }
      
    });
  } catch (error) {
    console.log(error);
  }
  
});


//-----------TODO-------- only customer_condcodes table
// create customer (upload files path?)
app.post('/api/v1/customers', async (req, res) => {
  console.log("create customer");
  console.log("req.body.customernumber :", req.body.customernumber);
  console.log("req.body :", req.body);
  try {
    const results = await db.query("INSERT INTO customer_condcodes (customernumber, firstname, lastname) values ($1,$2,$3) returning customernumber", [req.body.customernumber, req.body.firstname, req.body.lastname] );
    console.log("results :",results);
    res.status(201).json({
      status: "success",
      data: {
        customer: results.rows[0]
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// -----------TODO------- not set up yet, only using customer_condcodes table
// update customer by id
app.put('/api/v1/customers/:id', async (req, res) => {
  try {
    const results = await db.query("UPDATE customer_condcodes SET customernumber = $1, firstname = $2, lastname = $3 WHERE id = $4 returning *", [req.body.customernumber, req.body.firstname, req.body.lastname, req.params.id]);
    console.log("results :", results.rows[0]);
    console.log("req.params.id : ", req.params.id);
    console.log("req.body: ", req.body);
    res.status(201).json({
      status: "success",
      data: { 
        customer: results.rows[0],
      }
    });
  } catch (error) {
    console.log(error);
    }
});

// -----------TODO-------onlycustomer_condcodes table
// delete restaurant by id
app.delete('/api/v1/customers/:id', async (req, res) => {
  const results = db.query("DELETE FROM customer_condcodes WHERE id = $1", [req.params.id]);
  //console.log("deleted : ", req.params);
  //console.log("deleted : ", req.body);
  console.log("delete by id :", req.params.id);
  res.status(204).json({
    status: "success"
  });
});


// CREATE PDF for ONE CUSTOMER
app.get('/api/v1/customers/pdf/:customernumber', (req, res) => {
  console.log("Starting to create pdf for customer number: ", req.params.customernumber);
  const createPDF = async function () {
    //let customernumber = req.params.customernumber;
    try {
      console.log("running puppeteer now...");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`http://localhost:3000/customers/${req.params.customernumber}`, {waitUntil: 'networkidle0'});
        await page.emulateMediaType('screen');
        await page.pdf({
          path: `./pdfs/${req.params.customernumber}react.pdf`, // path (relative to CWD) to save the PDF to
          printBackground: true, // print background colors
          format: 'Legal'
        });
        await browser.close();
        
    
      }
        catch (error) {
          console.log(error);
        }
        console.log("done");
        
   };
   createPDF();
  res.status(204).json({
    status: "success"
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});