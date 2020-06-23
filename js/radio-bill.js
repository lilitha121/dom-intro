const callsElement = document.querySelector(".callTotalTwo");
// get reference to the sms total
const smsElement = document.querySelector(".smsTotalTwo");
// get reference to the overall total
const totalElement = document.querySelector(".totalTwo");

const addBtnRadioElement = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callsTotal2 = 0;
var smsTotal2 = 0;
//add an event listener for when the add button is pressed
function radioBillTotal(){
 
//    get the value entered in the billType textfield
    var checkedRadioBtnBill = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtnBill){
        var billItemType = checkedRadioBtnBill.value
        // billItemType will be 'call' or 'sms'
    
    // update the correct total
    if (billItemType === "call"){
        callsTotal2 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }
   
}


    //update the totals that is displayed on the screen.
    callsElement.innerHTML = callsTotal2.toFixed(2);
    smsElement.innerHTML = smsTotal2.toFixed(2);
    var totalCost2 = callsTotal2 + smsTotal2;
    totalElement.innerHTML = totalCost2.toFixed(2);
    radioBillTotalColor(totalCost2);
};
function radioBillTotalColor(totalCost2)  {


    totalElement.classList.remove("danger");
    totalElement.classList.remove("warning");

    //color the total based on the criteria
    if (totalCost2 >= 50){
        // adding the danger class will make the text red
        totalElement.classList.add("danger");
    }
    else if (totalCost2 >= 30){
        totalElement.classList.add("warning");
    }
}
addBtnRadioElement.addEventListener("click", radioBillTotal);
