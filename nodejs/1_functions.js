function printCurrentDate()
{
    //create object of date class
    var now = new Date(); //now is name of object and Date is classname
    var today = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
    console.log(today);
}
//function call 
printCurrentDate();