const puppeteer = require('puppeteer');
let customerNumber = 123142;
(async () => {
  
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:3000/customers/${customerNumber}`, {waitUntil: 'networkidle2'});
    //await page.emulate('screen');
    //await page.emulateMedia('screen');
    await page.emulateMediaType('screen');
    await page.pdf({
      path: `./test/${customerNumber}-pb.pdf`, // path (relative to CWD) to save the PDF to
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
  console.log("done");
})();

// module.exports = async function pdf(url, req) {
//   const filename = `/public/pdfs/LawnSummary-${req.params.customernumber}.pdf`;
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto('http://localhost:3000/customers/'+req.params.customernumber, {waitUntil: 'networkidle2'});
//   await page.pdf({path: filename, format: 'A4', landscape: true, printBackground: true});

//   await browser.close();
//   return filename;
// }