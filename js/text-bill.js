// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
const textTotalAddBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
const callsTotalElem = document.querySelector(".callTotalOne");
// get reference to the sms total
const smsTotalElem = document.querySelector(".smsTotalOne");
// get reference to the overall total
const totalCostElem = document.querySelector(".totalOne");
//create a variable that will keep track of the total bill
var callsTotal1 = 0;
var smsTotal1 = 0;
//add an event listener for when the add button is pressed
function textBillTotal(){
  
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value;
    
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal1 += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal1 += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal1.toFixed(2);
    smsTotalElem.innerHTML = smsTotal1.toFixed(2);
    var totalCost1 = callsTotal1 + smsTotal1;
    totalCostElem.innerHTML = totalCost1.toFixed(2);
    textBillTotalColor(totalCost1);
};

function textBillTotalColor(totalCost1)  {


    totalCostElem.classList.remove("danger");
    totalCostElem.classList.remove("warning");

    //color the total based on the criteria
    if (totalCost1 >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost1 >= 30){
        totalCostElem.classList.add("warning");
    }
}
 textTotalAddBtn.addEventListener("click",textBillTotal);

