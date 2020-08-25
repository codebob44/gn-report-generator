const puppeteer = require('puppeteer');

const customerNumbersArr = [
  2274,
  // 2325,
  // 2708,
  // 2720,
  // 109068,
  // 145382,
  // 187808,
  // 197047,
  // 273323,
  // 278927,
  // 281730,
  // 308979,
  // 314413,
  // 374600,
  // 378242,
  // 379719,
  // 386361,
  // 396395,
  // 397988,
  // 421766,
  // 438545,
  // 452599,
  // 460851,
  // 464059,

  // 464481,
  // 500518,
  // 511216,
  // 536781,
  // 542427,
  // 543181,
  // 546280,
  // 549815,
  // 563099,
  // 563127,
  // 573068,
  // 580949,
  // 582295,
  // 582783,
  // 587691,
  // 594945,
  // 600210,
  // 610454,
  // 611857,
  // 623136,
  // 626590,

  // 632016,
  // 633182,
  // 642781,
  // 655775,
  // 669659,
  // 671103,
  // 683853,
  // 688467,
  // 694675,
  // 694990,
  // 719431,
  // 739779,
  // 740613,
  // 778101,
  // 785858,
  // 790200,
  // 790899,
  // 791164,
  // 791345,
  // 792018,
  // 792118,

  // 792395,
  // 792435,
  // 792462,
  // 792617,
  // 792646,
  // 792670,
  // 792676,
  // 793385,
  // 793490,
  // 793717,
  // 793785,
  // 793796,
  // 793900,
  // 794125,
  // 794349,
  // 794382,
  // 794388,
  // 794399,
  // 794405,
  // 794409,
  // 794414
  
];
for (let i = 0; i < customerNumbersArr.length; i++) {
  let customerNumber = customerNumbersArr[i];
  (async () => {
  
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(`http://localhost:3000/customers/${customerNumber}`, {waitUntil: 'networkidle0'});
      //await page.emulate('screen');
      //await page.emulateMedia('screen');
      await page.emulateMediaType('screen');
      await page.pdf({
        path: `./test/${customerNumber}_LCReport.pdf`, // path (relative to CWD) to save the PDF to
        printBackground: true, // print background colors
        //width: '563px',
        //height: '975px',
        //width: '612px', // match the css width and height we set for our PDF
        
        //height: '792px',
        //format: 'Letter'
        format: 'Legal'
      });
      await browser.close();
    } catch (err) {
      console.log(err);
    }
    console.log("done with one customer pdf");
  })();
}

// (async () => {
  
//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(`http://localhost:3000/customers/${customerNumber}`, {waitUntil: 'networkidle2'});
//     //await page.emulate('screen');
//     //await page.emulateMedia('screen');
//     await page.emulateMediaType('screen');
//     await page.pdf({
//       path: `./${customerNumber}-test.pdf`, // path (relative to CWD) to save the PDF to
//       printBackground: true, // print background colors
//       //width: '563px',
//       //height: '975px',
//       //width: '612px', // match the css width and height we set for our PDF
      
//       //height: '792px',
//       //format: 'Letter'
//       format: 'Legal'
//     });
//     await browser.close();
//   } catch (err) {
//     console.log(err);
//   }
//   console.log("done");
// })();

// module.exports = async function pdf(url, req) {
//   const filename = `/public/pdfs/LawnSummary-${req.params.customernumber}.pdf`;
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto('http://localhost:3000/customers/'+req.params.customernumber, {waitUntil: 'networkidle2'});
//   await page.pdf({path: filename, format: 'A4', landscape: true, printBackground: true});

//   await browser.close();
//   return filename;
// }