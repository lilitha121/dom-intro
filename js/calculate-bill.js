//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotalElem = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");
const billTotalSpanElement = document.querySelector(".total");

//create the function that will be called when the calculate button is pressed
function calculateBill(bill){
    var billTotal = 0;
//  * this function should read the string value entered - split it on a comma.
var billItems = bill.split(',')
//  * loop over all the entries in the the resulting list
for (var i = 0; i < billItems.length; i++) {
    var billItemType = billItems[i].trim();
    
//  * check if it is a call or an sms and add the right amount to the overall total
if (billItemType === "call") {
    billTotal += 2.75;
} else if (billItemType === "sms") {
    billTotal += 0.65;
}
}
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
var roundedBillTotal = billTotal.toFixed(2);
return roundedBillTotal;

    
    }
    
    //round to two decimals
function styleTotalColor(roundedBillTotal)  {

const currentTotal = Number(roundedBillTotal);


billTotalSpanElement.classList.remove("danger");
billTotalSpanElement.classList.remove("warning");

//color the total based on the criteria
    if (currentTotal  >= 30){
        // adding the danger class will make the text red
       billTotalSpanElement.classList.add("danger");
    }
    else if (currentTotal >= 20 && currentTotal < 30){
       billTotalSpanElement.classList.add("warning");
    
} 

};

function calculateBtnClicked () {
var billString = billStringElement.value;


  const roundedBillTotal = calculateBill(billString);

styleTotalColor(roundedBillTotal);

billTotalSpanElement.innerHTML = roundedBillTotal;

};

//link the function to a click event on the calculate button
calculateBtn.addEventListener("click", calculateBtnClicked);







 